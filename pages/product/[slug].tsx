import ProductComponent from "../../components/Product";
import { withSSRContext } from "aws-amplify";
import { Bouquets } from "../../src/models";
import { ProductsType } from "../../lib/types";
import MetaComponent from "../../components/Meta";
import { BRAND_NAME } from "../../lib";
import PageNotFound from "../404";
import AdditionsComponent from "../../components/Additions";

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
              title={`${product.title} - ₵${product.amount} | ${BRAND_NAME}`}
              image={`https://res.cloudinary.com/deyudesls/image/upload/${product.img}`}
              description={product.description}
            />
          ))}
          <ProductComponent {...data} />
          <AdditionsComponent />
        </>
      )}
    </>
  );
};

export default Product;

export async function getStaticProps({ req, params }: any) {
  const SSR = withSSRContext({ req });
  const data = await SSR.DataStore.query(Bouquets, (item: any) =>
    item.slug("eq", params.slug)
  );
  const subscription = SSR.DataStore.observe(Bouquets).subscribe(() => data);
  subscription.unsubscribe();

  return {
    props: { products: JSON.parse(JSON.stringify(data)), slug: params.slug },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
