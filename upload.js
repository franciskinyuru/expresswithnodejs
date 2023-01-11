const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination:'./public/images/',
    filename: function(req, file, cb){
        cb(null, file.fieldname+'-'+Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({
    storage: storage,
    limits:{fieldSize: 1000000},
    fileFilter: function(req , file, cb){
        let fileTypes = /jpg|jpeg|png|gif/;
        let extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        let mimetype = fileTypes.test(file.mimetype);
        if(mimetype && extname){
            return cb(null, true);
        }else{
            cb('Error: Images Only!!')
        }
    }
}).single('image');

module.exports = upload;