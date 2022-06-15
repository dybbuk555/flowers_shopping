import SuccessComponent from "../components/Success";

const Results = (data: any) => {
  // data.props.data.client_reference_id
  return (
    <>
      <pre>
        {data.props.data?.payment_intent?.status
          ? JSON.stringify(data.props.data.customer_email, null, 2)
          // <SuccessComponent/>
          : "Please wait. Loading..."}
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
