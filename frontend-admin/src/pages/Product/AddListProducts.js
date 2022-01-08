import axios from "axios";
import React, { useState } from "react";
import * as XLSX from "xlsx";
function AddListProducts() {
  const [item, setItem] = useState([]);
  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
    promise.then((d) => {
      console.log(d);
      setItem(d);
    });
  };
  const handleChange = (e) => {
    const file = e.target.files[0];
    readExcel(file);
  };
  const addLstProduct = () => {
    item.forEach((element) => {
      axios
        .post(
          "https://stationery-store-tmdt.herokuapp.com/san_pham/create_san_pham",
          {
            ten_sp: element.Name,
            so_luong: element.Amount,
            ngay_nhap: new Date().toLocaleDateString("en-CA"),
            don_gia_nhap: element.ImportPrice,
            gia_ban_goc: element.BasicPrice,
            gia_ban_hien_tai: element.ExportPrice,
            id_loai_sp: element.Type.substr(0, 24),
            id_nha_cc: element.Supplier.substr(0, 24),
            mau_sac: element.Color,
            id_chat_lieu: element.Material.substr(0, 24),
            mo_ta: element.Description,
            ti_le_danh_gia: "0",
            id_phan_loai: element.Classify.substr(0, 24),
          }
        )
        .then((res) => {
          console.log(res.data);
        });
    });
    alert("Add data successful");
  };
  return (
    <div className="save-list">
      <div className="hearder">
      <a href="/excel/AddProduct.xlsx" download style={{marginRight: "20px"}}>Download the template</a>
      <input type="file" onChange={handleChange} />
        <div className="btn">
          <button
            onClick={() => addLstProduct()}
            className="btn-add"
            style={{ width: "120px" }}
          >
            Add
          </button>
        </div>
      </div>
      

      <div className="table-index" style={{ marginTop: "20px" }}>
        <table
          className="table table-hover"
          style={{ width: "275%", backgroundColor: "#fff" }}
        >
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Import Date</th>
              <th scope="col">Import Price</th>
              <th scope="col">Export Price</th>
              <th scope="col">Basic Price</th>
              <th scope="col">Supplier</th>
              <th scope="col">Type</th>
              <th scope="col">Color</th>
              <th scope="col">Material</th>
              <th scope="col">Classify</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {item.map((index) => (
              <tr key={index.ID}>
                <th scope="row">{index.Name}</th>
                <td>{index.Amount}</td>
                <td style={{ width: "128px" }}>
                  {new Date().toLocaleDateString("en-CA")}
                </td>
                <td>{index.ImportPrice}</td>
                <td>{index.ExportPrice}</td>
                <td>{index.BasicPrice}</td>
                <td style={{ width: "159px" }}>
                  {index.Supplier.substr(27, 50)}
                </td>
                <td>{index.Type.substr(27, 50)}</td>
                <td style={{ width: "120px" }}>{index.Color}</td>
                <td>{index.Material.substr(27, 50)}</td>
                <td>{index.Classify.substr(27, 50)}</td>
                <td>{index.Description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddListProducts;
