import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./comps/Header/Header";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./comps/Home/Home";

function App() {
  const [menuClicked, setMenuClicked] = useState(false);
  const updateClicked = () => setMenuClicked(!menuClicked);

  const [query, setQuery] = useState("");
  const updateQuery = (event) => {
    setQuery(event.target.innerText);
    updateClicked();
  };

  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState(1);
  const [news, setNews] = useState([]);
  const getNews = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&page=${pages}&api-key=AA9hsskreQAm42UE98cBJn5y2wIPJhuz`
    );
    const data = await response.json();
    setNews(data.response.docs);
    setLoading(false);
    console.log(data.response.docs);
  };

  useEffect(() => {
    getNews();
  }, [query, pages]);

  // const [haveCurrentNews, setHaveCurrentNews] = useState(false);
  const [currentNews, setCurrentNews] = useState();

  return (
    <Router>
      <div className="App">
        <Header
          updateQuery={updateQuery}
          menuClicked={menuClicked}
          updateClicked={updateClicked}
        />
        <Route
          path="/"
          exact
          component={() => (
            <Home
              pages={pages}
              loading={loading}
              news={news}
              setPages={setPages}
              setCurrentNews={setCurrentNews}
            />
          )}
        />
      </div>
    </Router>
  );
}

export default App;
