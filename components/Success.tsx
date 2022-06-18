import MetaComponent from "./Meta";
import { BRAND_NAME } from "../lib";



const SuccessComponent = ({trackingId}: any) => {
  return (
    <>
      <MetaComponent title={`Thank you! Order received | ${BRAND_NAME}`} />
      <main className="bg-white px-4 pt-16 pb-24 sm:px-6 sm:pt-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl mx-auto">
          <div className="max-w-xl">
            <h1 className="text-sm font-semibold uppercase tracking-wide text-green-600">
              Thank you!
            </h1>
            <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
              It&lsquo;s on the way!
            </p>
            <p className="mt-2 text-base text-gray-500">
              Your order has been
              <br />
              received and will be processed
              <br /> 
              shortly.
            </p>

            <dl className="mt-12 text-sm font-medium">
              <dt className="text-gray-900">Tracking number:</dt>
              <dd className="text-red-600 mt-2">{trackingId}</dd>
            </dl>
          </div>
        </div>
      </main>
    </>
  );
};

export default SuccessComponent;
