import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../actions";
import SmurfCard from "./smurfcard";
import Loader from "react-loader-spinner";
import SmurfForm from "./smurfForm";
//stlying

const SmurfList = props => {
  return (
    <>
      <div className="smurf-list-container">
        {props.smurfs &&
          props.smurfs.map(smurf => <SmurfCard key={smurf.id} smurf={smurf} />)}
      </div>

      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="BallTriangle" color="#FBC428" height="50" width="100" />
        ) : (
          "Get Smurfed"
        )}
      </button>
      <SmurfForm />
    </>
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
)(SmurfList);
