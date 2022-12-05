const fs = require('fs'),
    PDFdoc = require('pdfkit');


function generateHeader(doc) {
	doc.fontSize(
		10,
	).text(
		'Purscliq Header',
		50,
		780,
		{ align: 'center', width: 500 },
	);
}

function generateFooter(doc) {
    doc.fontSize(
        10,
    ).text(
        'Purscliq Footer',
        50,
        780,
        { align: 'center', width: 500 },
    );
}

const createInvoice = (invoice, path) => {
    let document = new PDFdoc({margin: 50})

    generateHeader(document); 
	generateFooter(document); 

	document.end();
	document.pipe(fs.createWriteStream(path));
};

module.exports = createInvoice

