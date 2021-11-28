/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState } from 'react'

function Checkout() {
  const [wards, setWards] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [cities, setCities] = useState([])
  const getAllCities = axios.get("http://localhost:8000/thanh_pho/")
  const getAllDistricts = axios.get("http://localhost:8000/quan/")
  const getAllWard = axios.get("http://localhost:8000/phuong/")
  return (
    <div>
      ward 
      district
      city
    </div>
  )
}

export default Checkout
