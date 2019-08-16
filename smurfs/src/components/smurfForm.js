import React, { component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";
import {
  Form,
  FormInput,
  FormGroup,
  Button,
  Container,
  Row,
  Col
} from "shards-react";
class SmurfForm extends React.Component {
  state = {
    name: "",
    age: "",
    height: "",
    avatar: "",
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
      avatar: "",
      id: ""
    });
  };
  render() {
    return (
      <Container className="smurf-form-container">
        <h1>Add A Smurf to the Village</h1>
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
          <FormGroup>
            <label htmlFor="avatar">Avatar</label>
            <FormInput
              type="text"
              name="avatar"
              placeholder="Image URL"
              value={this.state.avatar}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button onClick={this.addNewSmurf}>Add A New Smurf</Button>
        </Form>
      </Container>
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
