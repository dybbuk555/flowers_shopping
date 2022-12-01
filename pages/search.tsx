import { useRouter } from "next/router";
import MetaComponent from "../components/Meta";
import SearchComponent from "../components/Search";
import { BRAND_NAME, BRAND_URL } from "../lib";

const Search = () => {
  const router = useRouter();
  const query = router.query.q;
  return (
    <>
      <MetaComponent
        title={`Find ${query ?? "an item"} | ${BRAND_NAME}`}
        url={`${BRAND_URL}/search?q=${query}`}
      />
      <SearchComponent />
    </>
  );
};

export default Search;
