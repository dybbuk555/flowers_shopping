import CollectionsComponent from "../../components/Collections";
import MetaComponent from "../../components/Meta";
import { BRAND_NAME } from "../../lib";
import { ProductsType } from "../../lib/types";
import { Products } from "../../src/models";
import { withSSRContext } from "aws-amplify";

const Collections = (data: ProductsType) => {
  return (
    <>
      <MetaComponent title={`Collections for ${data.slug} | ${BRAND_NAME}`} />
      <CollectionsComponent {...data} />
    </>
  );
};

export default Collections;

export async function getServerSideProps({ req, params }: any) {
  const SSR = withSSRContext({ req });
  const data = await SSR.DataStore.query(Products, (item: any) =>
    item.or((item: any) =>
      item.category("contains", params.slug).tags("contains", params.slug)
    )
  );

  return {
    props: { products: JSON.parse(JSON.stringify(data)), slug: params.slug },
  };
}
