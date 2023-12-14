const Retailer = require('../models/retailerModel'); // Import your Retailer model

const getRetailers = async (req, res) => {
    try {
        const retailers = await Retailer.find({});
        res.status(200).json(retailers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createRetailer = async (req, res) => {
    try {
        const retailer = await Retailer.create(req.body);
        res.status(200).json(retailer);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

const getRetailer = async (req, res) => {
    try {
        const { id } = req.params;
        const retailer = await Retailer.findById(id);
        res.status(200).json(retailer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateRetailer = async (req, res) => {
    try {
        const { id } = req.params;
        const retailer = await Retailer.findByIdAndUpdate(id, req.body);

        // If no retailer is found in the database
        if (!retailer) {
            return res.status(404).json({ message: `Cannot find any retailer with ID ${id}` });
        }

        const updatedRetailer = await Retailer.findById(id);
        res.status(200).json(updatedRetailer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteRetailer = async (req, res) => {
    try {
        const { id } = req.params;
        const retailer = await Retailer.findByIdAndDelete(id);

        // If no retailer is found in the database
        if (!retailer) {
            return res.status(404).json({ message: `Cannot find any retailer with ID ${id}` });
        }

        res.status(200).json(retailer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getRetailers,
    getRetailer,
    createRetailer,
    updateRetailer,
    deleteRetailer
};
