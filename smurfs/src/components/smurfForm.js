import React, { component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";
import { Form, FormInput, FormGroup, Button } from "shards-react";
class SmurfForm extends React.Component {
  state = {
    name: "",
    age: "",
    height: "",
    id: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addNewSmurf = e => {
    e.preventDefault();
    const newSmurf = this.state;
    this.props.addSmurf(newSmurf);
    this.setState({
      name: "",
      age: "",
      height: "",
      id: ""
    });
  };
  render() {
    return (
      <Form>
        <FormGroup>
          <label htmlFor="#name">Name</label>
          <FormInput
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="#age">Age</label>
          <FormInput
            type="text"
            name="age"
            placeholder="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="height">Height</label>
          <FormInput
            type="text"
            name="height"
            placeholder="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button onClick={this.addNewSmurf}>Add A New Smurf</Button>
      </Form>
    );
  }
}
const mapStateToProps = state => {
  return {
    addSmurf: state.addSmurf
  };
};

export default connect(
  mapStateToProps,
  { addSmurf }
)(SmurfForm);
