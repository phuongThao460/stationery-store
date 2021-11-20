import React from 'react'
//import { useParams } from 'react-router';

function ListItem() {
  //const { title } = useParams();
  return (
    <div>
      <div>{window.localStorage.getItem("itemTitle")}</div>
    </div>
  )
}

export default ListItem
