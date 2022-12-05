const Transaction = require('../../models/transaction')

// const findTransanction = (req, res) => {
// 	const transactionId = Transaction.findOne({transactId: req.body.transactId})
// 	console.log(transactionId)
// 	return transactionId
// }
// findTransanction()

const invoiceSchema = {
	senderDetails: {
		name: 'John Doe',
		address: '1234 Main Street',
		city: 'San Francisco',
		state: 'CA',
		country: 'US',
		postal_code: 94111,
	},
	items: [
		{
			item: 'TC 100',
			description: 'Toner Cartridge',
			quantity: 2,
			amount: 6000,
		},
		{
			item: 'USB_EXT',
			description: 'USB Cable Extender',
			quantity: 1,
			amount: 2000,
		},
	],
	subtotal: 8000,
	paid: 0,
	invoice_nr: 1234,
};

module.exports = invoiceSchema;