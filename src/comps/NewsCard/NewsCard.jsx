import React from "react";
import "./NewsCard.css";

import atHome from "../../imgs/atHome.jpg";
//import foreign from "../../imgs/foreign.jpg";
//import none from "../../imgs/none.jpg";
import sports from "../../imgs/sports.jpg";
import world from "../../imgs/world.jpg";
import opinion from "../../imgs/opinion.jpg";
import us from "../../imgs/us.jpg";
import europe from "../../imgs/europe.jpg";
import asia from "../../imgs/asia.jpg";
import americas from "../../imgs/americas.jpg";
import realEstate from "../../imgs/realEstate.jpg";
import arts from "../../imgs/arts.jpg";
import movies from "../../imgs/movies.jpg";
import upshot from "../../imgs/upshot.jpg";
import parenting from "../../imgs/parenting.jpg";
import health from "../../imgs/health.jpg";
import books from "../../imgs/books.jpg";
import business from "../../imgs/business.jpg";
import climate from "../../imgs/climate.jpg";
import newYork from "../../imgs/newYork.jpg";
import well from "../../imgs/well.jpg";
import style from "../../imgs/style.jpg";
import science from "../../imgs/science.jpg";
import travel from "../../imgs/travel.jpg";
import podcast from "../../imgs/podcast.jpg";
import food from "../../imgs/food.jpg";

function NewsCard({ newsData, index, setCurrentNews }) {
  const getImg = () => {
    if (newsData.section_name === "Sports") return sports;
    if (newsData.section_name === "World") return world;
    if (newsData.section_name === "Opinion") return opinion;
    if (newsData.section_name === "U.S.") return us;
    if (newsData.section_name === "Real Estate") return realEstate;
    if (newsData.section_name === "At Home") return atHome;
    if (newsData.section_name === "Arts") return arts;
    if (newsData.section_name === "Movies") return movies;
    if (newsData.section_name === "The Upshot") return upshot;
    if (newsData.section_name === "Parenting") return parenting;
    if (newsData.section_name === "Health") return health;
    if (newsData.section_name === "Books") return books;
    if (newsData.section_name === "Business Day") return business;
    if (newsData.section_name === "Climate") return climate;
    if (newsData.section_name === "New York") return newYork;
    if (newsData.section_name === "Well") return well;
    if (newsData.section_name === "Style") return style;
    if (newsData.section_name === "Science") return science;
    if (newsData.section_name === "Travel") return travel;
    if (newsData.section_name === "Podcasts") return podcast;
    if (newsData.section_name === "Food") return food;

    if (newsData.subsection_name === "Europe") return europe;
    if (newsData.subsection_name === "Asia Pacific") return asia;
    if (newsData.subsection_name === "Americas") return americas;
  };

  return (
    <div
      className="NewsCard"
      onClick={() => {
        setCurrentNews(newsData);
      }}
    >
      <img src={getImg()} alt="img" />
      <a href={newsData.web_url} target="blank">
        <div>
          <h3>{newsData.headline.main}</h3>
        </div>
        <p>{newsData.pub_date.slice(0, 10)}</p>
      </a>
    </div>
  );
}

export default NewsCard;
