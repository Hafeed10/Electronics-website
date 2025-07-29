import React, { useContext } from "react";
import { TbTrash } from "react-icons/tb";
import { Link } from "react-router-dom";
import { displayMoney } from "../../helpers/utils";
import cartContext from "../../contexts/cart/cartContext";
import QuantityBox from "../common/QuantityBox";

const CartItem = (props) => {
  const { id, images, title, info, finalPrice, originalPrice, quantity } =
    props;

  const { removeItem } = useContext(cartContext);

//   const newPrice = displayMoney(finalPrice);
//   const oldPrice = displayMoney(originalPrice);

  return (
    <>
      <div className="cart_item">
        <figure className="cart_item_img">
          <Link to="#">
            <img src={images[0]} alt="product-img" />
          </Link>
        </figure>
        <div className="cart_item_info">
          <div className="cart_item_head">
            <h1 className="cart_item_title">
              <Link to="#">
                {title} {info}
              </Link>
            </h1>
            <div className="cart_item_del">
              <span onClick={() => removeItem(id)}>
                <TbTrash />
              </span>
              <div className="tooltip">Remove Item</div>
            </div>
          </div>
          <h5 className="products_price">Pleas Your Product Purchase</h5>
          <QuantityBox itemId={id} itemQuantity={quantity} />
        </div>
      </div>
    </>
  );
};

export default CartItem;
