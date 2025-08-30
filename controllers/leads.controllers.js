import Lead from "../models/leads.model";

const createLead = async (req, res) => {
    const { name, email, companyName, message } = req.body;

    try {
        const newLead = new Lead({ name, email, companyName, message });
        await newLead.save();
        res.status(201).json({ message: "Lead created successfully", lead: newLead });
    } catch (error) {
        res.status(500).json({ message: "Error creating lead", error: error.message });
    }
};

const getLeads = async (req, res) => {
    try {
        const leads = await Lead.find();
        res.status(200).json(leads);
    } catch (error) {
        res.status(500).json({ message: "Error fetching leads", error: error.message });
    }
};

export { createLead, getLeads };