import React from "react";
import Img from 'react-image'
import Button from "react-bootstrap/Button";

const AdRow = ({ ad, deleteHandler }) => {
    console.log(ad)
  return (
      
    <tr hidden={false}>
      <td >{ad.adID}</td>
      <td>{ad.adURL}</td>
      <td><a href={ad.adLink}>{ad.adLink}</a></td>
      <td ><Img src={ad.adURL} className="image"></Img></td>
      <td>
        <Button
          variant="outline-danger"
          type="button"
          onClick={() => deleteHandler(ad.adID)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default AdRow;