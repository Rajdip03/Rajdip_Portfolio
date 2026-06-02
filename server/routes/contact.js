const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const { validateContact } = require("../middleware/validate");

// @route   POST /api/contact
// @desc    Submit a contact form message
// @access  Public
router.post("/", validateContact, async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const contact = await Contact.create({ name, email, message });

    res.status(201).json({
      success: true,
      message: "Thank you! Your message has been sent successfully.",
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
      },
    });
  } catch (error) {
    console.error("Contact form error:", error);

    // Mongoose validation error
    if (error.name === "ValidationError") {
      const message = Object.values(error.errors)
        .map((err) => err.message)
        .join(", ");
      return res.status(400).json({ success: false, message });
    }

    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
});

// @route   GET /api/contact
// @desc    Get all contact submissions (for admin use)
// @access  Public (secure this in production)
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
