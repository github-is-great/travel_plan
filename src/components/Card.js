import { useState } from "react";
import "./Card.css";

function Card(props) {
  const defaultDescription = props.tour.info.substring(0, 200).concat("....");
  const [description, setDescription] = useState(defaultDescription);
  const [readmore, setReadmore] = useState(false);

  function readmoreHandler() {
    setReadmore(!readmore);
    if (readmore) {
      setDescription(defaultDescription);
    } else {
      setDescription(props.tour.info);
    }
  }

  function removeCard() {
    props.removeCard(props.tour.id);
  }

  return (
    <div className="card">
      <img className="image" src={props.tour.image} alt={props.tour.name}></img>
      <div>
        <div className="price">₹ {props.tour.price}</div>
        <div className="tour-name">{props.tour.name}</div>
      </div>
      <div>
        {description}
        <span className="readmore" onClick={readmoreHandler}>
          {readmore ? "Show Less" : "Read More"}
        </span>
      </div>
      <button className="btn-red" onClick={() => removeCard()}>
        Not Interested
      </button>
    </div>
  );
}

export default Card;
