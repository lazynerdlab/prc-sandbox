const fs = require('fs'),
    PDFdoc = require('pdfkit');


function generateHeader(doc) {
	doc.fontSize(
		10,
	).text(
		'Purscliq Header',
		50,
		70,
		{ align: 'center', width: 500 },
	);
}

function generateFooter(doc) {
    doc.fontSize(
        10,
    ).text(
        'Purscliq Footer',
        20,
        500,
        { align: 'center', width: 500 },
    );
}

function generateBody(doc, invoice) {
    const senderDetails = invoice.senderDetails;
    const receiverDetails = invoice.receiverDetails
    const transactionDetails = invoice.transactionDetails

	doc.text(`Invoice Number: ${invoice.invoice_nr}`, 50, 200)
		.text(`Invoice Date: ${new Date()}`, 50, 215)
		// .text(`Balance Due: ${invoice.subtotal - invoice.paid}`, 50, 130)

		.text(senderDetails.senderEmail, 300, 200)
		.text(receiverDetails.receiverEmail, 300, 215)
		.text(
			`${transactionDetails.amountSent}, ${transactionDetails.accountCharge}, ${transactionDetails.transactId}`,
			300,
			130,
		)
		.moveDown();
}

const createInvoice = (invoice, path) => {
    let document = new PDFdoc({margin: 5})

    generateHeader(document); 
    generateBody(document, invoice)
	generateFooter(document); 

	document.end();
	document.pipe(fs.createWriteStream(path));
};

module.exports = createInvoice

