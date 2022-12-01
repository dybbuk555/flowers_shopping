import { NextPage } from "next";
import ContactComponent from "../components/contact";
import MetaComponent from "../components/Meta";
import { BRAND_URL } from "../lib";

const Contact: NextPage = () => {
  return (
    <>
      <MetaComponent title="Contact" url={`${BRAND_URL}/contact`} />
      <ContactComponent />
    </>
  );
};

export default Contact;
