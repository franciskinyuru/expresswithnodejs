const express = require('express');
const upload = require('./upload');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render('index');
})
app.post('/upload', (req, res)=>{
    upload(req, res, (err) =>{
        if(err){
            console.log(err);
            res.render('index',{msg: err})
        }
        else{
            let checks = req.file;
            if(checks != 'undefined'){
                res.render('index', {file: 'images/'+req.file.filename})
            }
            else{
            
            res.render('index',{msg: 'Error: No file selected'})
        }
        }
    })
})
const PORT = 5001;
app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
});