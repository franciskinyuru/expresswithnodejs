const express = require('express');
const app = express();
app.get('/',(req, res){
    res.send('<h1>Welcome to my app</h1>')
})
const PORT = 5001;
app.listen(PORT, function(){
    console.log(`Server is listening on port ${PORT}`);
})