// Importing modules
const PDFDocument = require('pdfkit');
const fs = require('fs');

// Create a document
const doc = new PDFDocument();

doc.text('The file is create through pdfkit api.')

doc.pipe(fs.createWriteStream('myfile.pdf'));

doc.end()