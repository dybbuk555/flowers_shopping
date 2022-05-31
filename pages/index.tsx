import type { NextPage } from "next";
import MetaComponent from "../components/Meta";
import { BRAND_DESCRIPTION, BRAND_TAGLINE } from "../lib";

import LandingPageComponent from "../components/LandingPage";

const Home: NextPage = () => {
  const meta = {
    title: BRAND_TAGLINE,
    description: BRAND_DESCRIPTION,
  };
  return (
    <>
      <MetaComponent title={meta.title} description={meta.description} />

      <LandingPageComponent />
    </>
  );
};

export default Home;
