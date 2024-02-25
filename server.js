const express = require('express');
const port = 3000;
const app = express();
const data = require('./data.json');
const s = './data.xml';
const fs = require('fs');

function errorHandler(err, req, res, next) {
    console.log(err);
    res.status(500).send('Something broke!');
}

const xml2js = require('xml2js');

const xmlData = fs.readFileSync(s, 'utf-8');

xml2js.parseString(xmlData, (err, result) => {
    if (err) {
        throw err;
    }
}
);


 function xmlToHtml(xmlObj) {
        let html = '<ul>';
        html += '<br><li> ' + xmlObj.name + '</li> ';
        html += '<br><li> ' + xmlObj.email + '</li> ';
        return html + '</ul>';

    }



function _json_to_html(data) {
    let html = '<ul>'
    html += '<br><li> ' + data.name + '</li> ';
    html += '<br><li> ' + data.email + '</li> ';
    return html + '</ul>';
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    // Combine both responses into one
    res.send('About Us' + _json_to_html(data));
});

app.get('/contact', (req, res) => {
    res.send('Contact Us');
    
});

app.get('/services', (req, res) => {
    res.send('Services');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
