import axios from "axios";
import React, { Component, createRef } from "react";

export default class Voucher extends Component {
  constructor(props) {
    super(props);
    this.nameVoucher = createRef();
    this.dateStart = createRef();
    this.dateEnd = createRef();
    this.minNumberDay = createRef();
    this.minTotal = createRef();
    this.percentApply = createRef();
    this.startApply = createRef();
    this.endApply = createRef();
  }

  createVoucher = () => {
    axios
      .post("https://stationery-store-tmdt.herokuapp.com/voucher/create", {
        ten_voucher: this.nameVoucher.current.value,
        ngay_bat_dau_tich_luy: this.dateStart.current.value,
        ngay_ket_thuc_tich_luy: this.dateEnd.current.value,
        so_ngay_kich_hoat_tai_khoan_toi_thieu: this.minNumberDay.current.value,
        tong_tien_mua_hang_tich_luy_toi_thieu: this.minTotal.current.value,
        phan_tram_giam: this.percentApply.current.value,
        ngay_bat_dau_ap_dung: this.startApply.current.value,
        ngay_ket_thuc_ap_dung: this.endApply.current.value,
      })
      .then((res) => console.log(res.data));
  };
  render() {
    return (
      <>
        <div className="header">
          <h1>Add New Voucher</h1>
        </div>
        <div className="form-horizontal">
        <div className="form-group">
            <label className="control-label col-sm-2">Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Enter voucher’s name "
                ref={this.nameVoucher}
                autoFocus
              />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="form-group" style={{ width: "278px" }}>
              <label className="control-label col-sm-7">
                Accumulation start day
              </label>
              <div className="col-sm-10">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Enter product’s name "
                  ref={this.dateStart}
                  autoFocus
                />
              </div>
            </div>
            <div className="form-group" style={{ width: "278px" }}>
              <label className="control-label col-sm-7">
                Accumulation end day
              </label>
              <div className="col-sm-10">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Minimun day"
                  ref={this.dateEnd}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-7">
              Minimum account activation days
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                placeholder="Minimun activation days"
                ref={this.minNumberDay}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-7">
              Minimun cumulative purchase total
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                placeholder="Min total"
                ref={this.minTotal}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-7">Percent discount</label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                placeholder="percent"
                ref={this.percentApply}
              />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="form-group" style={{ width: "278px" }}>
              <label className="control-label col-sm-10">
                Start date of voucher application
              </label>
              <div className="col-sm-10">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Enter product’s name "
                  ref={this.startApply}
                />
              </div>
            </div>
            <div className="form-group" style={{ width: "278px" }}>
              <label className="control-label col-sm-10">
                End date of voucher application
              </label>
              <div className="col-sm-10">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Enter product’s name "
                  ref={this.endApply}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <button className="btn-edit" onClick={this.createVoucher}>
              Save
            </button>
          </div>
        </div>
      </>
    );
  }
}
