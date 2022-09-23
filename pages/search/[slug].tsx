import MetaComponent from "../../components/Meta";
import SearchComponent from "../../components/Search";
import { BRAND_NAME } from "../../lib";

const Search = (data:any) => {
  return (
    <>
    <MetaComponent title={`Search '${data.props.slug}' | ${BRAND_NAME}`} />
      <SearchComponent data={data.props.slug}/>
    </>
  );
};

export default Search;

export async function getStaticProps(context: any) {
 
  
    return {
      props: {
        props: { slug: context.query.slug },
      },
    };
  }

  export async function getStaticPaths() {
    return {
      paths: [],
      fallback: "blocking",
    };
  }
