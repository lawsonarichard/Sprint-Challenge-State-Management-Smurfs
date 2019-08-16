import React, { Component } from "react";
import "./App.css";
import SmurfList from "../components/smurflist";
import { getData } from "../actions";
import { connect } from "react-redux";
const App = props => {
  return (
    <div className="App">
      <SmurfList cards={props.smurf} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(App);
