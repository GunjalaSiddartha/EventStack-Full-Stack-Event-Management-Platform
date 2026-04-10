// // // const express = require("express");
// // // const router = express.Router();
// // import express from "express";
// // const router = express.Router();
// // //const Stripe = require("stripe");
// // import Stripe from "stripe";


// // const stripe = new Stripe("sk_test_your_key");

// // router.post("/checkout", async (req, res) => {
// //   try {
// //     const { eventId } = req.body;

// //     const session = await stripe.checkout.sessions.create({
// //       payment_method_types: ["card"],
// //       mode: "payment",
// //       line_items: [
// //         {
// //           price_data: {
// //             currency: "inr",
// //             product_data: {
// //               name: "Event Registration",
// //             },
// //             unit_amount: 100 * 100, // ₹100
// //           },
// //           quantity: 1,
// //         },
// //       ],
// //       success_url: "http://localhost:5173/success",
// //       cancel_url: "http://localhost:5173/cancel",
// //     });

// //     res.json({ url: session.url });

// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({ error: "Stripe error" });
// //   }
// // });

// // // module.exports = router;
// // export default router;

// import express from "express";
// import Stripe from "stripe";

// const router = express.Router();

// // use your REAL secret key here
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// router.post("/checkout", async (req, res) => {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       line_items: [
//         {
//           price_data: {
//             currency: "inr",
//             product_data: {
//               name: "Event Registration",
//             },
//             unit_amount: 100 * 100, // ₹100
//           },
//           quantity: 1,
//         },
//       ],
//       success_url: "http://localhost:5173/success",
//       cancel_url: "http://localhost:5173/cancel",
//     });

//     res.json({ url: session.url });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Stripe error" });
//   }
// });

// export default router;









// import express from "express";
// import Stripe from "stripe";

// const router = express.Router();

// import { env } from "../config/env.js";

// const stripe = new Stripe(env.stripeSecretKey);


// router.post("/checkout", async (req, res) => {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       line_items: [
//         {
//           price_data: {
//             currency: "inr",
//             product_data: {
//               name: "Event Registration",
//             },
//             unit_amount: event.price * 100,
//           },
//           quantity: 1,
//         },
//       ],
//       success_url: "http://localhost:5173/success",
//       cancel_url: "http://localhost:5173/cancel",
//     });

//     res.json({ url: session.url });

//   } catch (err) {
//   console.error("🔥 STRIPE ERROR:", err.message);
//   console.error(err); // full error
//   res.status(500).json({ error: err.message });
// }
// });

// export default router;




import express from "express";
import Stripe from "stripe";
import { env } from "../config/env.js";
import Event from "../models/Event.js"; // ✅ IMPORTANT

const router = express.Router();

const stripe = new Stripe(env.stripeSecretKey);

router.post("/checkout", async (req, res) => {
  try {
    const { eventId } = req.body;

    console.log("EVENT ID:", eventId);

    // ✅ FETCH EVENT FROM DB
    const event = await Event.findById(eventId);

    console.log("EVENT DATA:", event);

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    // ✅ ensure minimum ₹50
    const amount = Math.max(50, Number(event.price || 50));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: event.title,
            },
            unit_amount: amount * 100, // ✅ FIXED
          },
          quantity: 1,
        },
      ],
      success_url: `http://localhost:5173/success?eventId=${event._id}`,
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({ url: session.url });

  } catch (err) {
    console.error("🔥 STRIPE ERROR:", err.message);
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;