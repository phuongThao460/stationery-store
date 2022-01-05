/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
function EditAddress() {
  const styles = {
    marginBottom: "20px",
  };
  const cusAccountInfo = JSON.parse(
    window.localStorage.getItem("customer-account")
  );
  const [streetName, setStreetName] = useState("");
  const [idCities, setIdCities] = useState(0);
  const [idDis, setIdDis] = useState(0);
  const [idWard, setIdWard] = useState(0);

  const [lstCity, setLstCity] = useState([]);
  const [lstDistrict, setLstDistrict] = useState([]);
  const [lstWard, setLstWard] = useState([]);

  useEffect(() => {
    setStreetName(cusAccountInfo.dia_chi);
    //setIdCities(cusAccountInfo.id_phuong.id_quan.id_thanh_pho._id);
    //setIdDis(cusAccountInfo.id_phuong.id_quan._id);
    //setIdWard(cusAccountInfo.id_phuong._id);
  }, []);
  useEffect(() => {
    axios
      .post("https://stationery-store-tmdt.herokuapp.com/phuong/", { _id: cusAccountInfo.id_phuong })
      .then((res) => {
        console.log(res.data);
        setIdCities(res.data.id_quan.id_thanh_pho._id);
        setIdDis(res.data.id_quan._id);
        setIdWard(res.data._id);
      });
  }, []);
  const getListCities = () => {
    axios.get("https://stationery-store-tmdt.herokuapp.com/thanh_pho/").then((response) => {
      setLstCity(response.data);
    });
  };
  const getListDistrict = async () => {
    await axios
      .post("https://stationery-store-tmdt.herokuapp.com/quan/by_thanh_pho", {
        id_thanh_pho: idCities,
      })
      .then((response) => {
        setLstDistrict(response.data);
      });
  };
  const getListWards = async () => {
    await axios
      .post("https://stationery-store-tmdt.herokuapp.com/phuong/by_quan", {
        id_quan: idDis,
      })
      .then((response) => {
        setLstWard(response.data);
      });
  };

  useEffect(() => {
    getListCities();
  }, []);
  const changeCities = (event) => {
    setIdCities(event.target.value);
    getListDistrict();
  };
  const changeDistricts = (event) => {
    setIdDis(event.target.value);
    getListWards();
  };
  const changeWards = (event) => {
    setIdWard(event.target.value);
  };

  return (
    <div className="main-right">
      <h2>Your Address</h2>
      <form className="address-profile">
        <table>
          <tr>
            <td className="td-label" style={{ width: "132px" }}>
              Street name & number
            </td>
            <td>
              <input
                className="text-field"
                type="text"
                placeholder="Street number and name"
                value={streetName}
                style={styles}
              />
            </td>
          </tr>
          <tr>
            <td className="td-label">City</td>
            <td>
              <select
                className="city"
                value={idCities}
                onChange={changeCities}
                style={styles}
              >
                <option value="0" className="select-option">
                  Select City...
                </option>
                {lstCity.map((item, index) => (
                  <option key={index} value={item._id}>
                    {item.ten_thanh_pho}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td className="td-label">District</td>
            <td>
              <select
                className="District"
                value={idDis}
                onChange={changeDistricts}
                style={styles}
              >
                <option value="0" className="select-option">
                  Select District...
                </option>
                {lstDistrict.map((item, index) => (
                  <option key={index} value={item._id}>
                    {item.quan_huyen}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td className="td-label">Ward</td>
            <td>
              <select
                className="Ward"
                value={idWard}
                onChange={changeWards}
                style={styles}
              >
                <option value="0" className="select-option">
                  Select Ward...
                </option>
                {lstWard.map((item, index) => (
                  <option key={index} value={item._id}>
                    {item.phuong_xa}
                  </option>
                ))}
              </select>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default EditAddress;
