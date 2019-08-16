import React from "react";

const SmurfCard = props => {
  return (
    <div className="smurf-list-row">
      <p>Name: {props.smurf.name}</p>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
      <p>Id: {props.smurf.id}</p>
    </div>
  );
};

export default SmurfCard;
