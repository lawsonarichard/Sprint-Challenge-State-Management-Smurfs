import { deleteSmurf } from "../actions";
import React from "react";
import { connect } from "react-redux";

class removeSmurf extends React.Component {
  deleteSmurf = (e, id) => {
    e.preventDefault();
    this.props.deleteSmurf(id);
  };
}

export default removeSmurf;
