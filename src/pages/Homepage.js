import React, { useState } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Homepage = () => {
  const [input, setInput] = useState("");
  const searchUrl = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;

  const [data, setdata] = useState(null);
  const pexelsAuth = "gYrElvR5Y4ZnMfcqY9MgYQWGi99e6NGuMWmOrnenc7lJBQztbqEZ9mZg";
  const initialUrl = `https://api.pexels.com/v1/curated?per_page=15&page=1`;
  const search = async () => {
    const dataFetch = await fetch(initialUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        authorization: pexelsAuth,
      },
    });
    const parseData = await dataFetch.json();
    setdata(parseData.photos);
    console.log(parseData);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search search={search} />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
    </div>
  );
};

export default Homepage;
