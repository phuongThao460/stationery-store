import React from "react";

const ReadOnlyType = ({ index, item, handleEditClick }) => {
  return (
    <>
      <tr key={index}>
        <th scope="row">{item._id.substr(14)}</th>
        <td>{item.ten_loai_sp}</td>
        <td>
          <button
            type="button"
            className="btn-edit"
            onClick={(event) => handleEditClick(event, item._id)}
          >
            Edit
          </button>
        </td>
      </tr>
    </>
  );
};

export default ReadOnlyType;
