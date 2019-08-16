import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../actions";
import SmurfCard from "./smurfcard";
import Loader from "react-loader-spinner";
import SmurfForm from "./smurfForm";
import { Container } from "shards-react";
//stlying

const SmurfList = props => {
  return (
    <>
      <Container className="smurf-list-container">
        {props.smurfs.map(smurf => (
          <SmurfCard key={smurf.id} smurf={smurf} />
        ))}
        {props.getData()}
      </Container>
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
