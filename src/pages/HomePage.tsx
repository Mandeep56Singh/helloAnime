import { useQuery } from "@apollo/client";
import { GetAnimePage } from "../services/animePage/queries";

import React from "react";
import { Navbar } from "../components/navbar/Navbar";

const HomePage = () => {
  const { loading, error, data } = useQuery(GetAnimePage, {
    variables: { PerPage: 30, Page: 1 },
  });
  if (error) return <p>Error : {error.message}</p>;

  if (loading) return <p>Loading...</p>;
  const animeList = data?.Page?.media;
 return (
  <div style={{backgroundColor:'#fff'}}>
  <Navbar></Navbar>
  <div>
    {

    }
  </div>
  </div>
 )
};

export default HomePage;
