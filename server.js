const express = require('express');
//route 
//nest express
const port = 3000;
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!');
    });
 
app.get('/about', (req, res) => {
    res.send('About Us');
    });



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    });