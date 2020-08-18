import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import Loading from "../Loading/Loading";
import "./Home.css";

function Home({ pages, loading, news, setPages, setCurrentNews }) {
  return (
    <div className="Home">
      <div className="newsCardContainer">
        {loading === true ? (
          <Loading />
        ) : (
          news.map((newsData, index) => (
            <NewsCard
              key={newsData._id}
              newsData={newsData}
              index={index}
              setCurrentNews={setCurrentNews}
            />
          ))
        )}
      </div>
      {loading === true ? null : (
        <div>
          <button onClick={() => setPages(pages - 1)}>Prev</button>
          <button onClick={() => setPages(pages + 1)}>Next</button>
        </div>
      )}
    </div>
  );
}

export default Home;
