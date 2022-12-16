const fs = require('fs'),
    PDFdoc = require('pdfkit');


function generateHeader(doc) {
    doc.fontSize(
        20,
    ).text(
        'Purscliq Header',
        50,
        40,
        { align: 'center', width: 500, fontWeight: 700 },
    );
    doc.text()
}

function generateBody(doc, invoice) {
    const senderDetails = invoice.senderDetails;
    const receiverDetails = invoice.receiverDetails
    const transactionDetails = invoice.transactionDetails

    doc.fontSize(15)
        .text(`${new Date()}`, 50, 100)

        .text(`Invoice Number: `, 50, 140)
        .text(`${invoice.invoice_nr}`, 350, 140)

        // .text(`Balance Due: ${invoice.subtotal - invoice.paid}`, 50, 130)

        .text(`Sender:`, 50, 180)
        .text(`${senderDetails.senderEmail}`, 350, 180)

        .text(`Receiver:`, 50, 220)
        .text(`${receiverDetails.receiverEmail}`, 350, 220)

        .text(`Amount:`, 50, 260)
        .text(`NGN ${transactionDetails.amountSent}`, 350, 260)

        .text(`TransactionCharge:`, 50, 300)
        .text(`NGN ${transactionDetails.accountCharge}`, 350, 300)

        .text(`Transaction ID:`, 50, 340)
        .text(`NGN ${transactionDetails.transactId}`, 350, 340)

        .text(`Status:`, 50, 380)
        .text(`Success`, 350, 380)
        .moveDown();
}

function generateFooter(doc) {
    doc.fontSize(
        20,
    ).text(
        'Purscliq Footer',
        50,
        460,
        { align: 'center', width: 500 },
    )
    doc.fontSize(10).text(
        `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        `,
        50,
        480,
    )
}


const createInvoice = (invoice, path) => {
    let document = new PDFdoc({ margin: 5 })

    generateHeader(document);
    generateBody(document, invoice)
    generateFooter(document);

    document.end();
    document.pipe(fs.createWriteStream(path));
};


module.exports = { createInvoice }

