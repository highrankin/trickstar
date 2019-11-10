import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: "",
      name: "",
      show: "",
      time: ""
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
        "https://n5rsco4hq5.execute-api.eu-west-2.amazonaws.com/trickstar/",
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
    const { day, 
      //name, 
      show, 
      time } = this.state;
    return (
      <div className="form">
        <Form onSubmit={this.submitHandler}>
          <Form.Group controlId="showform">
            <div>
              {" "}
              <label>Day </label>
            </div>
            <select
              name="day"
              vaule={day}
              onChange={this.changeHandler}
              onBeforeInput={this.changeHandler}
            >
              <option value="null" />
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>

            {/* <div>
              <Form.Label>Host</Form.Label>
            </div>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={this.changeHandler}
             
            /> */}

            <div>
              <Form.Label>Show And Host </Form.Label>
            </div>
            <Form.Control
              type="text"
              name="show"
              value={show}
              onChange={this.changeHandler}
              
             
            />

            <div>
              <Form.Label>Start Time </Form.Label>
            </div>
            <Form.Control
              type="text"
              name="time"
              value={time}
              onChange={this.changeHandler}
             
            />

            <Button className="button" variant="outline-success" type="submit" //onClick={() => window.location.reload()} 
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default PostForm;
