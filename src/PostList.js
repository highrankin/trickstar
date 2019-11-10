import React, { Component } from "react";
import axios from "axios";
import MondayShowsRow from "./dayTables/mondayTable";
import TuesdayShowsRow from "./dayTables/tuesdayTable";
import WednesdayShowsRow from "./dayTables/wednesdayTable";
import ThursdayShowsRow from "./dayTables/thursdayTable";
import FridayShowsRow from "./dayTables/fridayTable";
import SaturdayShowsRow from "./dayTables/saturdayTable";
import SundayShowsRow from "./dayTables/sundayTable";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://n5rsco4hq5.execute-api.eu-west-2.amazonaws.com/trickstar/",
        this.state
      )
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;

    const deleteHandler = (showID, time) => {
      axios
        .delete(
          "https://n5rsco4hq5.execute-api.eu-west-2.amazonaws.com/trickstar/",
          { data: { showID: showID.toString(),
           time: time.toString() } }
        )
        .then(response => {
          console.log(response);
          window.location.reload();
        })
        .catch(error => {
          console.log(error);
        });
    };

    return (
      <div>
        <h3 padding="20px">Current Schedule</h3>

        <Table className="Table">
          <thead className="TableHead">
            <tr>
              <th hidden={true}> ID </th>
              <th> Day </th>
              <th hidden={true}> Host </th>
              <th> Show </th>
              <th> Time </th>
              <th>
                <Button
                  variant="outline-secondary"
                  onClick={() => window.location.reload()}
                >
                  Refresh List
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.length
              ? posts.map(post => (
                  <MondayShowsRow
                    key={post.showID}
                    post={post}
                    deleteHandler={deleteHandler}
                  />
                ))
              : null}
          </tbody>
          <tbody>
            {posts.length
              ? posts.map(post => (
                  <TuesdayShowsRow
                    key={post.showID}
                    post={post}
                    deleteHandler={deleteHandler}
                  />
                ))
              : null}
          </tbody>
          <tbody>
            {posts.length
              ? posts.map(post => (
                  <WednesdayShowsRow
                    key={post.showID}
                    post={post}
                    deleteHandler={deleteHandler}
                  />
                ))
              : null}
          </tbody>
          <tbody>
            {posts.length
              ? posts.map(post => (
                  <ThursdayShowsRow
                    key={post.showID}
                    post={post}
                    deleteHandler={deleteHandler}
                  />
                ))
              : null}
          </tbody>
          <tbody>
            {posts.length
              ? posts.map(post => (
                  <FridayShowsRow
                    key={post.showID}
                    post={post}
                    deleteHandler={deleteHandler}
                  />
                ))
              : null}
          </tbody>
          <tbody>
            {posts.length
              ? posts.map(post => (
                  <SaturdayShowsRow
                    key={post.showID}
                    post={post}
                    deleteHandler={deleteHandler}
                  />
                ))
              : null}
          </tbody>
          <tbody>
            {posts.length
              ? posts.map(post => (
                  <SundayShowsRow
                    key={post.showID}
                    post={post}
                    deleteHandler={deleteHandler}
                  />
                ))
              : null}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default PostList;
