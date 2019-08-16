import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";
import { removeSmurf } from "./deleteSmurf";
import { connect } from "react-redux";

const SmurfCard = props => {
  return (
    <Card style={{ maxWidth: "300px" }}>
      <CardHeader>{props.smurf.name}</CardHeader>
      <CardImg className="smurf-img" src={`${props.smurf.avatar}`} />
      <CardBody>
        <p>Height: {props.smurf.height}</p>
        <p>Age: {props.smurf.age}</p>
        <Button onClick={e => this.deleteSmurf(e, this.props.smurf.id)}>
          Banish from the village
        </Button>
      </CardBody>
    </Card>
  );
};

export default SmurfCard;
