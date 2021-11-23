import React from 'react'
import { IoMdRemove } from "react-icons/io";
import { GrAdd } from "react-icons/gr";
import { BsHandbagFill } from "react-icons/bs";
import { BsFillSuitHeartFill } from "react-icons/bs";
import "../style/Product.css"


const Product = () => {
    return (
        <div className="Container-Product">
            <div className="Wrapper">
                <div className="ImgContainer">
                 <img className="Image" src="https://inbacha.com/wp-content/uploads/2021/05/in-so-tay-doc-quyen1.jpg" />
                </div>
                <div className="infoContainer">
                    <h1 className="Title-Product">
                    Sổ tay mèo A5 160 trang Guden
                    </h1>
                    <span className="Price">$20</span>
                    <p className="Desc">
                    1. Sản phẩm sổ tay mèo Nhật Bản nằm trong bộ sưu tập mèo Nhật Bản bao gồm các dòng sản phẩm: sổ tay, hình dán, bưu thiếp,... . Phong cách hoạt hình Anime, màu sắc rực rỡ <br/>
                    2. Bìa sổ được in bằng công nghệ in offset chất lượng hình ảnh cao, sắc nét. Giấy được sử dụng là giấy trắng tự nhiên chống lóa mắt, giúp mắt không bị mỏi khi nhìn lâu <br/>
                    3. Gáy sổ được làm bằng chất liệu Inox cao cấp, cự kỳ cứng cáp và không bị hoen, gỉ theo thời gian <br/>
                    4. Sổ được thiết kế cứng cáp do sử dụng công nghệ đặc biệt, chống gãy, nát hoặc bị gập khi để sổ trong cặp sách, hoặc sổ bị đè lên chịu lực nhiều <br/> 
                    5. Sổ có 2 loại giấy chấm hoặc kẻ tùy theo nhu cầu sử dụng. '
                    </p>
                    
                    <div className="FilterContainer">
                        <div className="Filter">
                            <span className="FilterTitle">Color</span>
                            <div className="FilterColor" color="black"/>
                            <div className="FilterColor" color="red"/>
                            <div className="FilterColor" color="gray"/>
                            <div className="FilterColor" color="orange"/>
                            <div className="FilterColor" color="blue"/>
                        </div>
                    </div>
                    <div className="AddContainer">
                        <div className="AmountContainer">
                            <IoMdRemove />
                            <span className="Amount">1</span>
                            <GrAdd/>
                        </div>
                        <button className="Button"><BsHandbagFill style={{marginRight:"7px"}}/>ADD TO CART</button>
                        <button className="Button"><BsFillSuitHeartFill style={{marginRight:"7px"}}/>ADD TO WISHLIST</button>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Product
