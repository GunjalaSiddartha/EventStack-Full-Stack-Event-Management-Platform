const { createCheckoutSession } = require("../services/paymentService");
const Event = require("../models/Event");

exports.checkout = async (req, res) => {
  try {
    const { eventId } = req.body;

    const event = await Event.findById(eventId);

    const session = await createCheckoutSession(event);

    res.json({ url: session.url });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Payment failed" });
  }
};