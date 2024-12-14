const Contact = require("../Models/contact-model");

const contactFrom = async (req, res) => {
    try {
        const response = req.body
        await Contact.create(response)
        return res.status(200).json({ Message: "message send successfully " })
    } catch (error) {
        return res.status(400).json({ Message: "message not send" })
    }
}

module.exports = contactFrom;