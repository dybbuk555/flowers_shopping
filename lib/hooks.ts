import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";

export const useData = (model: any) => {
  const [data, setData] = useState<typeof model[]>([]);

  useEffect(() => {
    fetchPosts();
    async function fetchPosts() {
      const getData: typeof model[] = await DataStore.query(model);
      setData(getData);
    }
    const subscription = DataStore.observe(model).subscribe(() => fetchPosts());
    return () => subscription.unsubscribe();
  }, []);

  return data;
};

export const useInfoData = (
  model: any,
  route: any
) => {
  const [data, setData] = useState<typeof model[]>([]);

  useEffect(() => {
    fetchPosts();
    async function fetchPosts() {
      const getData: typeof model[] = await DataStore.query(
        model,
        (item: any) => item.page("eq", route)
      );
      setData(getData);
    }
    const subscription = DataStore.observe(model).subscribe(() => fetchPosts());
    return () => subscription.unsubscribe();
  }, []);

  return data;
};
