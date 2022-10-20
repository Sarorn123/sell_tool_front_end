import { AiOutlineClose, AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Cart = ({ cart, handleCart }) => {
  return (
    <div className="cart-container">
      {
        cart && <div className="blank" onClick={handleCart}></div>
      }
      <div className={cart ? "cart" : "cart hide-cart"}>
        <div className="head">
          <div className="cart-title">
            <h3>Your Cart</h3>
            <button className="close" onClick={handleCart}>
              <AiOutlineClose />
            </button>
          </div>
          <div className="cart-items">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        </div>
        <div className="foot">
          <div className="total">
            <span>Total: $</span>
            <span>663.09</span>
          </div>
          <div className="buttons">
            <button>View Cart</button>
            <button>Check Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CartItem = () => {
  return (
    <div className="item">
      <div className="cover">
        <img src="https://picsum.photos/400/400" alt="" />
      </div>
      <div className="desc">
        <Link to={"/"}>
          <h4>Your Item Name</h4>
        </Link>
        <div className="price">
          <span>4</span>
          <span>X</span>
          <span>$133.54</span>
        </div>
      </div>
      <button className="action">
        <AiOutlineDelete />
      </button>
    </div>
  );
};
