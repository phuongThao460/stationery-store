/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, useEffect } from "react";

function Data() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/thong_ke/")
      .then((res) => setData(res.data));
  }, []);
  return <div></div>;
}

export default Data;

export const annualVehiclesSales = [
  { month: "Jan", Sales: 171763, Profits: 5070 },
  { month: "Feb", Sales: 53240, Profits: 9900 },
  { month: "Mar", Sales: 96700, Profits: 15340 },
  { month: "Apr", Sales: 118780, Profits: 73170 },
  { month: "May", Sales: 113870, Profits: 307380 },
  { month: "Jun", Sales: 159620, Profits: 336000 },
  { month: "Jul", Sales: 194479, Profits: 600174 },
  { month: "Aug", Sales: 194479, Profits: 600174 },
  { month: "Sep", Sales: 194479, Profits: 600174 },
  { month: "Oct", Sales: 194479, Profits: 600174 },
  { month: "Nov", Sales: 194479, Profits: 600174 },
  { month: "Dec", Sales: 194479, Profits: 600174 },
];
