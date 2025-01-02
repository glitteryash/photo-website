import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Homepage = () => {
  const [input, setInput] = useState("");
  const searchUrl = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;

  //search function, fetches data from the API
  const [data, setdata] = useState(null);
  const pexelsAuth = "gYrElvR5Y4ZnMfcqY9MgYQWGi99e6NGuMWmOrnenc7lJBQztbqEZ9mZg";
  const initialUrl = `https://api.pexels.com/v1/curated?per_page=15&page=1`;
  const search = async (url) => {
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: pexelsAuth,
      },
    });
    const parseData = await dataFetch.json();
    setdata(parseData.photos);
  };
  //useEffect to call the search function when the page loads
  useEffect(() => {
    search(initialUrl);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchUrl);
        }}
        setInput={setInput}
      />
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
