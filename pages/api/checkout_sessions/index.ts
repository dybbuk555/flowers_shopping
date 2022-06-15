import type { NextApiRequest, NextApiResponse } from "next";

import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as unknown as string, {
  apiVersion: "2020-08-27",
});

const CheckoutApi = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { body } = req;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [body.line],
      mode: "payment",
      client_reference_id: body.client_reference_id,
      customer_email: body.customer_email,
      success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/checkout`,
    });

    res.status(200).json({ sessionId: session.id });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default CheckoutApi;
