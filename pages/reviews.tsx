import MetaComponent from "../components/Meta";
import ReviewsComponent from "../components/Reviews";
import { BRAND_NAME, BRAND_URL } from "../lib";

const Reviews = () => {
  return (
    <>
      <MetaComponent
        title={`Reviews | ${BRAND_NAME}`}
        description={`What customers are saying about ${BRAND_NAME}`}
        url={`${BRAND_URL}/reviews`}
      />
      <ReviewsComponent />
    </>
  );
};

export default Reviews;
