const express = require('express');
const indexRouter = require('./routes/index');


const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', indexRouter);

const PORT = 5001;
app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
});