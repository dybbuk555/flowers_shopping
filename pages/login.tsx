import LoginComponent from "../components/Login";
import MetaComponent from "../components/Meta";
import { BRAND_NAME } from "../lib";
import { BRAND_URL } from "../lib";

const Login = () => {
  return (
    <>
      <MetaComponent
        title={`Login | ${BRAND_NAME}`}
        url={`${BRAND_URL}/login`}
      />
      <LoginComponent />
    </>
  );
};

export default Login;
