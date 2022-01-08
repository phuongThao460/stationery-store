import React from 'react'

const EditableMaterial = ({ index, item }) => {
  return (
    <tr key={index}>
      <th scope="row">{item._id.substr(14)}</th>
        <td><input type="text" required="required" name="typeName"/></td>
        <td>
          <button className="btn-edit">Save</button>
          <button className="btn-delete">Cancel</button>
        </td>
    </tr>
  )
}

export default EditableMaterial
