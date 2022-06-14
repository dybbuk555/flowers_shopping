import MetaComponent from "../components/Meta";
import ReviewsComponent from "../components/Reviews";
import { BRAND_NAME } from "../lib";

const Reviews = () => {
  return (
    <>
      <MetaComponent
        title={`Reviews | ${BRAND_NAME}`}
        description={`What customers are saying about ${BRAND_NAME}`}
      />
      <ReviewsComponent />
    </>
  );
};

export default Reviews;
