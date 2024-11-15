import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "./CardItem";
import "./Cards.css";
import { Content } from "../../Interfaces/Content";

const Cards = () => {
  const [cardData, setCardData] = useState([] as Content[]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/content");
        const data: Content[] = response.data;
        console.log(`Fetched a total of ${data.length} contents...`);
        setCardData(data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.error("Axios Error: ", err.message);
          console.error("Axios Error Response: ", err.response);
          console.error("Axios Error Config: ", err.config);
        } else {
          console.error("General Error: ", err);
        }
      }
    };
    fetchData();
  }, []);
  return (
    <div className="cards">
      <h1>Check out these Trending courses!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          {cardData.map((card) => (
            <>
              <ul className="cards__items">
                <CardItem key={card.id} {...card} />
              </ul>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
