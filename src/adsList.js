import React, { Component } from "react";
import axios from "axios";

import Table from "react-bootstrap/Table";
import AdRow from "./adRow"


class AdsList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ads: []
      };
    }
  
    componentDidMount() {
      axios
        .get(
          "https://n5rsco4hq5.execute-api.eu-west-2.amazonaws.com/trickstar/ads",
          this.state
        )
        .then(response => {
          console.log(response);
          this.setState({ ads: response.data });
        })
        .catch(error => {
          console.log(error);
        });
    }
  
    render() {
      const { ads } = this.state;
  
      const deleteHandler = adID => {
        axios
          .delete(
            "https://n5rsco4hq5.execute-api.eu-west-2.amazonaws.com/trickstar/ads",
            { data: { adID: adID.toString() } }
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
          <h3 padding="20px">Ads List</h3>
  
          <Table className="Table">
            <thead className="TableHead">
              <tr>
                <th > adID </th>
                <th> Image Url </th>
                <th> Ad Link </th>
                <th> Image </th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {ads.length
                ? ads.map(ad => (
                    <AdRow
                      key={ad.adID}
                      ad={ad}
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
  
  export default AdsList;
  