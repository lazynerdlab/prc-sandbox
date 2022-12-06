const Transaction = require('../../models/transaction')

const transactionInvoiceSchema = () => {
	const transaction = Transaction.findOne({transactId: req.body.transactId})
	
	const invoiceSchema = {
		senderDetails: {
			senderEmail: transaction.transactionUserEmail
		},
		receiverDetails: {
			receiverEmail: transaction.recieverUserEmail
		},
		transactionDetails: {
			amountSent: transaction.Sent,
			accountCharge: transaction.acccountCharge,
			transactId: transaction.transactId,
		}
	}

	return invoiceSchema
}

module.exports = transactionInvoiceSchema;


