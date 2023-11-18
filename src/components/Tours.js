import { useState } from "react";
import data from "../data.js";
import Card from "./Card.js";
import "./Tours.css";

function Tours() {
  const [tourArr, setTourArr] = useState(data);
  console.log(tourArr);

  function removeCard(id) {
    const newTourArr = tourArr.filter((tour) => tour.id !== id);
    setTourArr(newTourArr);
  }

  function showAllTours() {
    setTourArr(data);
  }

  if (tourArr.length > 0) {
    return (
      <div className="container">
        <div>
          <h2>Travel Plan With Dynamic Developer</h2>
          <p>Click on Not interested for each tour-card to remove it. When all cards are removed, click on Refresh Button to get all cards back.</p>
        </div>
        <div className="cards">
          {tourArr.map((tour) => (
            <Card key={tour.id} tour={tour} removeCard={removeCard}></Card>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="refresh">
        <h2>No tours left</h2>
        <button className="btn-wht" onClick={() => showAllTours()}>Refresh</button>
      </div>
    );
  }
}

export default Tours;
