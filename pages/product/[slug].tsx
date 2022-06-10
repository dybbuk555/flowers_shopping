import ProductComponent from "../../components/Product";
import { withSSRContext } from "aws-amplify";
import { Products } from "../../src/models";
import { ProductsType } from "../../lib/types";
import MetaComponent from "../../components/Meta";
import { BRAND_NAME, BRAND_URL } from "../../lib";
import PageNotFound from "../404";

const Product = (data: ProductsType) => {
  return (
    <>
      {data.products.length < 1 ? (
        <PageNotFound />
      ) : (
        <>
          {data.products.map((product, i: number) => (
            <MetaComponent
              key={i}
              title={`${product.title} | ${BRAND_NAME}`}
              url={`${BRAND_URL}/product/${product.slug}`}
            />
          ))}
          <ProductComponent {...data} />
        </>
      )}
    </>
  );
};

export default Product;

export async function getServerSideProps({ req, params }: any) {
  const SSR = withSSRContext({ req });
  const data = await SSR.DataStore.query(Products, (item: any) =>
    item.slug("eq", params.slug)
  );

  return {
    props: { products: JSON.parse(JSON.stringify(data)), slug: params.slug },
  };
}
