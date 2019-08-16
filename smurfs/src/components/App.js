import React, { Component } from "react";
import "./App.css";
import SmurfList from "../components/smurflist";
import { getData } from "../actions";
import { connect } from "react-redux";
import SmurfForm from "../components/smurfForm";
const App = props => {
  return (
    <div className="App">
      <img
        className="smurf-logo"
        src="https://cdn.freebiesupply.com/logos/large/2x/lets-smurf-logo-png-transparent.png"
      />
      <SmurfList smurf={props.smurf} />
      <SmurfForm />
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
