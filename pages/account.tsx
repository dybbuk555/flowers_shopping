import { useSession } from "next-auth/react";

const Account = () => {
  const { data: session } = useSession();

  return (
    <>
      {session && session?.user?.email && <>Welcome {session?.user?.email}</>}
    </>
  );
};

export default Account;


Account.auth = true