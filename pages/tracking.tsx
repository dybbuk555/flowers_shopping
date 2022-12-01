import MetaComponent from "../components/Meta";
import TrackingComponent from "../components/Tracking";
import { BRAND_URL } from "../lib";

const Tracking = () => {
  return (
    <>
      <MetaComponent title="Track your order" url={`${BRAND_URL}/tracking`} />
      <TrackingComponent />
    </>
  );
};

export default Tracking;
