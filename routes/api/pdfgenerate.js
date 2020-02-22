const express = require('express')
const router = express();
const pdf = require('html-pdf');
const path = require('path');

const admissionTemplate = require('../../documents/mbamca');
const filePath = '../mbamca1.5/result.pdf';
const resolvedPath = path.resolve(filePath);
console.log(resolvedPath);

router.post('/create-pdf', (req, res) => {
    pdf.create(admissionTemplate(req.body),{}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }
        res.send(Promise.resolve());
    });
});

router.get('/fetch-pdf', (req, res) => {
    res.sendFile(resolvedPath);
})


module.exports = router;
