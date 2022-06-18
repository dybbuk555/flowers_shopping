import { useSession } from "next-auth/react";
import AccountComponent from "../components/Account";
import MetaComponent from "../components/Meta";
import { BRAND_NAME } from "../lib";

const Account = () => {
  const { data: session } = useSession();

  return (
    <>
      <MetaComponent title={`Account | ${BRAND_NAME}`} />
      {session && session?.user?.email && (
        <>
          <AccountComponent email={session?.user?.email} />
        </>
      )}
    </>
  );
};

export default Account;

Account.auth = true;
