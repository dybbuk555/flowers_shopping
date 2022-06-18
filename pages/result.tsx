import { DataStore } from "aws-amplify";
import localforage from "localforage";
import React, { useEffect, useState } from "react";
import SuccessComponent from "../components/Success";
import { Checkout } from "../src/models";

const Results = (data: any) => {
  const [success, setSuccess] = useState<any>();



  const updateUser = React.useCallback(async () => {
    const original = await DataStore.query(Checkout, (item: any) =>
      item.and((item: any) =>
        item
          .email("eq", data?.props?.data?.customer_email)
          .trackingID("eq", data?.props?.data?.client_reference_id)
      )
    );
    setSuccess(original);

    await DataStore.save(
      Checkout.copyOf(original[0]!, (updated) => {
        updated.status = `Paid`;
      })
    );
  }, []);


  const clearCart = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    try {
      localforage.clear();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    updateUser();
    clearCart();
  }, []);

  return (
    <>
      <pre>
        {data ? (
          <>
            {success?.map((update: any) => (
              <div key={update.id}>
                <SuccessComponent trackingId={update.trackingID} />
              </div>
            ))}
          </>
        ) : (
          "Please wait. Loading..."
        )}
      </pre>
    </>
  );
};

export default Results;

export async function getServerSideProps(context: any) {
  const response = await fetch(
    `${process.env.URL}/api/checkout_sessions/${context.query.session_id}`
  );
  const result = await response.json();

  return {
    props: {
      props: { data: result },
    },
  };
}
