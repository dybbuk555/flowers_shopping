import React from "react";
import MetaComponent from "../components/Meta";
import { Formik, Field, Form, useFormikContext } from "formik";
import { BRAND_NAME, BRAND_URL } from "../lib";
import * as yup from "yup";
import { useRouter } from "next/router";

const Playground = () => {
  const [loading, setLoading] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState([]);
  const [note, setNote] = React.useState("");
  const router = useRouter();
  const { option } = router.query;
  const [changeValues, setChangeValues] = React.useState({
    generateType: "image",
    description: "",
  });

  const initialValues = {
    generateType: option ?? "image",
    description: "",
  };

  const FormObserver: React.FC = () => {
    const { values } = useFormikContext() as any;
    React.useEffect(() => {
      setChangeValues(values);
    }, [values]);
    return null;
  };

  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY!,
  });
  const openai = new OpenAIApi(configuration);

  const ValidationSchema = yup.object().shape({
    generateType: yup.string().oneOf(["image", "message"]).required(),

    description: yup.string().min(1).max(1000).required(),
  });

  return (
    <>
      <MetaComponent
        title={`Playground| ${BRAND_NAME}`}
        description={`Generate images of bouquets and arrangements or notes and poems using words.`}
        url={`${BRAND_URL}/playground`}
      />
      <div className="bg-gray-50">
        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Playground</h2>
          <Formik
            validationSchema={ValidationSchema}
            enableReinitialize
            initialValues={initialValues}
            onSubmit={async (values) => {
              await new Promise((resolve) => setTimeout(resolve, 500));
              setLoading(true);
              try {
                if (values.generateType === "image") {
                  setNote("");
                  const response = await openai.createImage({
                    prompt: values.description,
                    n: 3,
                    size: "256x256",
                  });
                  setImageUrl(response?.data?.data);
                } else {
                  setImageUrl([]);
                  const response = await openai.createCompletion({
                    model: "text-davinci-003",
                    prompt: values.description,
                    max_tokens: 2048,
                    temperature: 0,
                  });
                  setNote(response?.data?.choices?.[0]?.text);
                }
              } catch (err) {
                console.log(err);
              } finally {
                setLoading(false);
              }
            }}
          >
            {({ errors, touched }) => (
              <Form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                <FormObserver />
                <div>
                  <div className="mt-4">
                    <label
                      htmlFor="generateType"
                      className="block text-sm font-medium text-gray-700"
                    >
                      What do you want to generate?
                    </label>
                    <Field
                      as="select"
                      id="generateType"
                      name="generateType"
                      className={`block w-full border-gray-300 rounded-md shadow-sm ${
                        errors.generateType && touched.generateType
                          ? "focus:ring-red-500 focus:border-red-500"
                          : "focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      } `}
                    >
                      <option value="image">Image</option>
                      <option value="message">Note/Poem</option>
                    </Field>
                    {errors.generateType && touched.generateType && (
                      <span className="text-red-500 hover:text-red-700">
                        {errors.generateType}
                      </span>
                    )}
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Write your description below
                    </label>
                    <div className="mt-1">
                      <Field
                        as="textarea"
                        rows={4}
                        name="description"
                        id="description"
                        defaultValue={""}
                        placeholder={`Write a description of the ${changeValues?.generateType} you want to generate.`}
                        className={`block w-full border-gray-300 rounded-md shadow-sm ${
                          errors.description && touched.description
                            ? "focus:ring-red-500 focus:border-red-500"
                            : "focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        } `}
                      />
                      {errors.description && touched.description && (
                        <span className="text-red-500 hover:text-red-700">
                          {errors.description}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="py-6 px-4 sm:px-6">
                    {!loading ? (
                      <button
                        type="submit"
                        className="w-full bg-green-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500"
                      >
                        Genenrate
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="w-full bg-red-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-red-500"
                        disabled
                      >
                        <svg
                          role="status"
                          className="inline w-4 h-4 mr-3 text-white animate-spin"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor"
                          />
                        </svg>
                        Generating {changeValues?.generateType}...
                      </button>
                    )}
                  </div>
                </div>

                <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16 py-5 mx-5">
                  {imageUrl?.length > 0 &&
                    imageUrl?.map((image: any, i) => (
                      <img
                        key={i}
                        src={image?.url}
                        alt="image"
                        height={256}
                        width={256}
                        loading="eager"
                      />
                    ))}

                  {note && <p>{note}</p>}
                </div>
              </Form>
            )}
          </Formik>

          {loading && (
            <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-black opacity-90 flex flex-col items-center justify-center">
              <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
              <h2 className="text-center text-white text-xl font-semibold">
                Generating {changeValues?.generateType}...
              </h2>
              <p className="w-1/3 text-center text-white">
                Please wait while we work to display results for your{" "}
                {changeValues?.generateType}.
              </p>
            </div>
          )}

          <p className="text-gray-500 flex py-5 text-sm">
            If you are a user of FlowersGhana and you want help generating
            images of the items you want or crafting the perfect greeting card
            message, please describe what it is you want in complete plain
            English. This will allow us to generate the images or messages that
            best match your needs. For example, if you want to generate an image
            of a bouquet of flowers, please provide a detailed description of
            the type of flowers you want, the color of the flowers, and any
            other relevant details. If you want help crafting a greeting card
            message, please provide details about the occasion, the recipient,
            and the type of message you want. By providing clear and detailed
            descriptions of what you want, we can use our advanced artificial
            intelligence algorithms to generate the images or messages that will
            best suit your needs. Whether you are looking for a unique gift for
            a loved one or a special message for a special occasion, we are here
            to help you
          </p>
        </div>
      </div>
    </>
  );
};

export default Playground;
