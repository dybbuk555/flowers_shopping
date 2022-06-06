import type { NextPage } from "next";
import MetaComponent from "../components/Meta";
import { BRAND_TAGLINE } from "../lib";

import LandingPageComponent from "../components/LandingPage";

const Home: NextPage = () => {
  return (
    <>
      <MetaComponent title={BRAND_TAGLINE} />

      <LandingPageComponent />
    </>
  );
};

export default Home;
