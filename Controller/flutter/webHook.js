const { flutterCharges } = require("./flutterCharges");
const { flutterOthers } = require("./flutterOthers");
const { flutterTransfer } = require("./flutterTransfer");

const webHook = (req, res) => {
    const secretHash = process.env.FLW_SECRET_HASH;
    const signature = req.headers["verif-hash"];

    if (!signature || (signature !== secretHash)) {
        res.status(401).end();
    }
    const payload = req.body;
    // It's a good idea to log all received events.
    log(payload);
    // Do something (that doesn't take too long) with the payload

    if (payload.event === "charge.completed") {
        flutterCharges(payload);

    } else if (payload.event === "transfer.completed") {

        flutterTransfer(payload);
    } else {
        flutterOthers(payload);
    }
    res.status(200)
}


module.exports = { webHook }