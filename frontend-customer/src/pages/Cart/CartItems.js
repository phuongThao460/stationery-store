import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from "react-router-dom";

const CartItems = ({ item, qtyChangeHandler, removeHandler }) => {
    
return (
  <div className="Product-cart">
    <div className="ProductDetail-cart">
      <img
        alt=""
        className="Image-cart"
        src="https://inbacha.com/wp-content/uploads/2021/05/in-so-tay-doc-quyen1.jpg"
      />
      <div className="Details-cart">
      <Link to={`/products/${item.product}`} className="ProductName" style={{ width: "328px" }}>
        <p style={{fontSize: "15px"}}>{item.ten_sp}</p>
      </Link>
        
        <span style={{ display: "inline-flex" }}>
          Color:{" "}
          <div
            className="ProductColor"
            style={{
              backgroundColor: `${item.mau_sac}`,
              marginLeft: "12px",
            }}
          />
        </span>
      </div>
    </div>
    
    <div className="PriceDetail">
    
      <div className="ProductPrice">${item.gia_ban_hien_tai}.00</div>
    </div>
    <span className="ProductId" style={{ display: "inline-flex", marginTop: "64px" }}>
          <div className="ProductAmountContainer">
            {/* <GrAdd style={style} />
            <div className="ProductAmount">{item.so_luong}</div>
            <IoMdRemove style={style} />*/}
          
            <select
              value={item.count}
              onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
              className="ProductAmount"
            >
              {[...Array(item.so_luong).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
          </select>
            <button
                className="ProductAmount" style={{ backgroundColor:"#FF9999"}}
                onClick={() => removeHandler(item.product)}
                >
                <AiOutlineDelete />
            </button>
          </div> 
        </span>
        {/* <div style={{ display: "none" }}>
      {(subtotal = subtotal + item.so_luong * item.don_gia_xuat)} 
      </div>*/}
    </div>
  );
};

export default CartItems;