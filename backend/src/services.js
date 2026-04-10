const Stripe = require("stripe");
const stripe = new Stripe("sk_test_your_secret_key");

exports.createCheckoutSession = async (event) => {
  return await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "inr",
          product_data: {
            name: event.title,
          },
          unit_amount: event.ticketPrice * 100,
        },
        quantity: 1,
      },
    ],
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel",
  });
};