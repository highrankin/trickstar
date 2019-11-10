import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button"; 

class AdForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adID: " ",
      adURL: "",
      adLink: ""
    
    };
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post(
        "https://n5rsco4hq5.execute-api.eu-west-2.amazonaws.com/trickstar/ads",
        this.state
      )
      .then(response => {
        console.log(response);
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { adID, adURL, adLink } = this.state;
    return (
      <div className="form">
        <Form onSubmit={this.submitHandler}>
        {" "}
          <Form.Group controlId="adForm">
          <div>
              <Form.Label>Ad ID </Form.Label>
            </div>
            <Form.Control
              type="text"
              name="adID"
              value={adID}
              onChange={this.changeHandler}
            />
            <div>
              <Form.Label>Image URL </Form.Label>
            </div>
            <Form.Control
              type="text"
              name="adURL"
              value={adURL}
              onChange={this.changeHandler}
            />

            <div>
              <Form.Label>Ad Link </Form.Label>
            </div>
            <Form.Control
              type="text"
              name="adLink"
              value={adLink}
              onChange={this.changeHandler}
            
            />

            <Button className="button" variant="outline-success" type="submit" 
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default AdForm;
