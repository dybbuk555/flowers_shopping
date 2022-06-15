import { BRAND_NAME } from "../lib";
import CheckoutComponent from "../components/Checkout";
import MetaComponent from "../components/Meta";

const Checkout = () => {
  return (
    <>
      <MetaComponent title={`Checkout | ${BRAND_NAME}`} />
      <CheckoutComponent />
    </>
  );
};

export default Checkout;
