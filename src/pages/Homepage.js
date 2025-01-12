import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Homepage = () => {
  const [input, setInput] = useState("");
  const [currentSearch, setCurrentSearch] = useState("");
  const searchUrl = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=1`;
  const [page, setPage] = useState(1);

  //search function, fetches data from the API
  const [data, setdata] = useState(null);
  const pexelsAuth = "gYrElvR5Y4ZnMfcqY9MgYQWGi99e6NGuMWmOrnenc7lJBQztbqEZ9mZg";
  const initialUrl = `https://api.pexels.com/v1/curated?per_page=15&page=1`;
  const search = async (url) => {
    // setPage(2);
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

  //function to get more pictures
  const morePage = async () => {
    let newUrl;
    if (currentSearch === "") {
      newUrl = `https://api.pexels.com/v1/curated?per_page=15&page=${page + 1}`;
    } else {
      newUrl = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${
        page + 1
      }`;
    }
    setPage(page + 1);

    const dataFetch = await fetch(newUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: pexelsAuth,
      },
    });
    const parseData = await dataFetch.json();
    setdata(data.concat(parseData.photos));
  };

  //useEffect to call the search function when the page loads
  useEffect(() => {
    search(initialUrl);
  }, []);

  useEffect(() => {
    if (currentSearch === "") {
      search(initialUrl);
    } else {
      search(searchUrl);
    }
  }, [currentSearch]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          setCurrentSearch(input);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morePage}>more</button>
      </div>
    </div>
  );
};

export default Homepage;
