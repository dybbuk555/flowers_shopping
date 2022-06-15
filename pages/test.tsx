import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function Example() {
  const handleClick = async (event: any) => {
    const { sessionId } = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity: 1 }),
    }).then((res) => res.json());

    const stripe = await stripePromise;
    const error = await stripe?.redirectToCheckout({ sessionId });
  };

  return (
    <>
      <h1>Checkout</h1>
      <button role={"link"} onClick={handleClick}>
        Checkout
      </button>
    </>
  );
}
