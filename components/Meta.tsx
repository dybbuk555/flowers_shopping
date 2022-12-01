import Head from "next/head";
import {
  BRAND_DESCRIPTION,
  BRAND_FAVICON,
  BRAND_IMAGE,
  BRAND_NAME,
  BRAND_TAGLINE,
  BRAND_URL,
} from "../lib";
import { Meta } from "../lib/types";

const MetaComponent = ({ title, description, image, url, product }: Meta) => {
  return (
    <>
      <Head>
        <title>{title || BRAND_NAME}</title>

        <meta name="title" content={BRAND_TAGLINE} />
        <meta name="description" content={description || BRAND_DESCRIPTION} />
        {/* <link rel="icon" type="image/webp" sizes="32x32" href={BRAND_FAVICON} /> */}

        <meta
          name="google-site-verification"
          content="sSptwoLmfmCDsOmhdYVomW_kcMKEZu4ckCfUEROyemk"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url || BRAND_URL} />
        <meta property="og:title" content={title || BRAND_TAGLINE} />
        <meta
          property="og:description"
          content={description || BRAND_DESCRIPTION}
        />
        <meta property="og:image" content={image || BRAND_IMAGE} />

        <meta property="product:brand" content={BRAND_NAME} />

        {product && (
          <>
            <meta
              property="product:availability"
              content={product?.availability}
            />
            <meta property="product:condition" content="new" />
            <meta property="product:price:amount" content={product?.amount} />
            <meta property="product:price:currency" content="GHS" />
            <meta
              property="product:retailer_item_id"
              content={product?.title}
            />
            <meta
              property="product:item_group_id"
              content={product?.category}
            />
          </>
        )}

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url || BRAND_URL} />
        <meta property="twitter:title" content={title || BRAND_TAGLINE} />
        <meta
          property="twitter:description"
          content={description || BRAND_DESCRIPTION}
        />
        <meta property="twitter:image" content={image || BRAND_IMAGE} />
      </Head>
    </>
  );
};

export default MetaComponent;
