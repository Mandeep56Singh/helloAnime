import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
type props = {
  title: string;
};
const PageTitle: React.FC<props> = ({ title }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
  }, [location, title]);

  return null;
};

export default PageTitle;
