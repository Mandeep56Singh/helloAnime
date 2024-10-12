import { useQuery } from "@apollo/client";
import { GetAnimePage } from "../services/animePage/queries";

import React from "react";

const HomePage = () => {
  const { loading, error, data } = useQuery(GetAnimePage, {
    variables: { PerPage: 30, Page: 1 },
  });
  if (error) return <p>Error : {error.message}</p>;

  if (loading) return <p>Loading...</p>;
  const animeList = data?.Page?.media;
  return <div>{animeList?.map((anime) => anime?.title?.english)}</div>;
};

export default HomePage;
