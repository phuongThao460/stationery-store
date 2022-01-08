import React from 'react'

const ReadOnlyMaterial = ({ index, item, handleEditClick }) => {
  return (
    <tr key={index}>
        <th scope="row">{item._id.substr(14)}</th>
        <td>{item.ten_chat_lieu}</td>
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
  )
}

export default ReadOnlyMaterial
