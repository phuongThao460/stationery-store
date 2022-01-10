import React from "react";

function ReadOnlySupplier({ item, handleEditClick }) {
  return (
    <tr>
      <th scope="row">{item._id.substr(14)}</th>
      <td>{item.ten_nha_cc}</td>
      <td>{item.sdt}</td>
      <td>{item.email}</td>
      <td>{item.dia_chi}</td>
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
  );
}

export default ReadOnlySupplier;
