import { BRAND_NAME } from "../lib";
import CheckoutComponent from "../components/Checkout";
import MetaComponent from "../components/Meta";
import { BRAND_URL } from "../lib";

const Checkout = () => {
  return (
    <>
      <MetaComponent
        title={`Checkout | ${BRAND_NAME}`}
        url={`${BRAND_URL}/checkout`}
      />
      <CheckoutComponent />
    </>
  );
};

export default Checkout;
