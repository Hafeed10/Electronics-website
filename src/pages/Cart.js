import React, { useContext } from "react";
import { BsCartX } from "react-icons/bs";
import { calculateTotal, displayMoney } from "../helpers/utils";
import useDocTitle from "../hooks/useDocTitle";
import cartContext from "../contexts/cart/cartContext";
import CartItem from "../components/cart/CartItem";
import EmptyView from "../components/common/EmptyView";

const Cart = () => {
  useDocTitle("Cart");
  const { cartItems } = useContext(cartContext);

  // Debug: Log cart items
  console.log("cartItems:", cartItems);

  const cartQuantity = cartItems.length;

  const cartTotal = cartItems.map((item) => item.originalPrice * item.quantity);
  const calculateCartTotal = calculateTotal(cartTotal);
  const displayCartTotal = displayMoney(calculateCartTotal);

  const cartDiscount = cartItems.map(
    (item) => (item.originalPrice - item.finalPrice) * item.quantity
  );
  const calculateCartDiscount = calculateTotal(cartDiscount);
  const displayCartDiscount = displayMoney(calculateCartDiscount);

  const totalAmount = calculateCartTotal - calculateCartDiscount;
  const displayTotalAmount = displayMoney(totalAmount);

  // ✅ Handle WhatsApp checkout
  const handleWhatsAppCheckout = () => {
    const message = cartItems
      .map((item) => `• ${item.name || item.title} x${item.quantity}`)
      .join("\n");

    const finalMessage = `🛒 *Order Summary*\n\n${message}\n\n`;
    const encodedMessage = encodeURIComponent(finalMessage);
    const whatsappLink = `https://wa.me/919446180100?text=${encodedMessage}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <section id="cart" className="section">
      <div className="container">
        {cartQuantity === 0 ? (
          <EmptyView
            icon={<BsCartX />}
            msg="Your Cart is Empty"
            link="/all-products"
            btnText="Start Shopping"
          />
        ) : (
          <div className="wrapper cart_wrapper">
            <div className="cart_left_col">
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>

            <div className="cart_right_col">
              <div className="order_summary">
                <h3>
                  Order Summary &nbsp; ({cartQuantity}{" "}
                  {cartQuantity > 1 ? "items" : "item"})
                </h3>
                <div className="order_summary_details">
                  <div className="price">
                    <span>Original Price</span>
                    <b>******</b>
                  </div>
                  <div className="discount">
                    <span>Discount</span>
                    <b>******</b>
                  </div>
                  <div className="delivery">
                    <span>Delivery</span>
                    <b>Free</b>
                  </div>
                  <div className="separator"></div>
                  <div className="total_price">
                    <b>
                      <small>Total Price</small>
                    </b>
                    <b>******</b>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn checkout_btn"
                  onClick={handleWhatsAppCheckout}
                >
                  Checkout via WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
