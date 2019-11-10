import React from "react";

import Button from "react-bootstrap/Button";

const ShowRow = ({ post, deleteHandler }) => {
  return (
    <tr hidden={false}>
      <td hidden={true}>{post.showID}</td>
      <td>{post.day}</td>
      <td>{post.name}</td>
      <td>{post.show}</td>
      <td>{post.time}</td>
      <td>
        <Button
          variant="outline-danger"
          type="button"
          onClick={() => deleteHandler(post.showID)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ShowRow;
