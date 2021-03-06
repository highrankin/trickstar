import React from "react";

import Button from "react-bootstrap/Button";

const SaturdayShowsRow = ({ post, deleteHandler }) => {
  let hideOrNot = true;
  if (post.day === "Saturday") {
    hideOrNot = false;
  } else {
    hideOrNot = true;
  }
  return (
    <tr hidden={hideOrNot}>
      <td hidden={true}>{post.showID}</td>
      <td>{post.day}</td>
      <td hidden={true}>{post.name}</td>
      <td>{post.show}</td>
      <td>{post.time}</td>
      <td>
        <Button
          variant="outline-danger"
          type="button"
          onClick={() => deleteHandler(post.showID, post.time)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default SaturdayShowsRow;
