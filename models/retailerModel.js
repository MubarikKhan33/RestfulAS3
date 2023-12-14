const mongoose = require('mongoose');

const retailerSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a retailer name"]
        },
        location: {
            type: String,
            required: true,
        },
        contactNumber: {
            type: String,
            required: false,
        },
        // Add any other fields specific to retailers
    },
    {
        timestamps: true
    }
);

const Retailer = mongoose.model('Retailer', retailerSchema);

module.exports = Retailer;
