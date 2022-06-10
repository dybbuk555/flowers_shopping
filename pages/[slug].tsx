import { InfosType } from "../lib/types";
import { InfoPages } from "../src/models";
import MetaComponent from "../components/Meta";
import { BRAND_NAME } from "../lib";
import InfoComponent from "../components/Info";
import { withSSRContext } from "aws-amplify";

const Info = (data: InfosType) => {
  console.log(data);
  return (
    <>
      {data.infos.map((detail, i) => (
        <MetaComponent title={`${detail.title} | ${BRAND_NAME}`} key={i} />
      ))}

      <InfoComponent {...data} />
    </>
  );
};

export default Info;

export async function getServerSideProps({ req, params }: any) {
  const SSR = withSSRContext({ req });
  const data = await SSR.DataStore.query(InfoPages, (item: any) =>
    item.page("eq", params.slug)
  );

  return {
    props: { infos: JSON.parse(JSON.stringify(data)) },
  };
}
