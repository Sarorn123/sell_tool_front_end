import "../styles/navbar.scss";
import { logoimg } from "../img";
import { BsSearch, BsCartFill, BsHeart } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { Searchbox } from "./Searchbox";
import { useState } from "react";
import { Cart } from "./Cart";

export const Navbar = () => {
  const location = useLocation();
  const urlpath = location.pathname;

  const [search, setSearch] = useState(true);
  const handleSearch = () => {
    setSearch(!search);
  };

  const [cart, setCart] = useState(false);
  const handleCart = () => {
    setCart(!cart);
  };
  return (
    <div className="my-container">
      <div className="navbar">
        <div className="nav-logo">
          <button>
            <BiMenu />
          </button>
          <Link to="/">
            <img src={logoimg} alt="" />
          </Link>
        </div>
        <div className="nav-content">
          <div className="links">
            <Link className="link" to="/">
              Explore
            </Link>
            <Link className="link" to="/">
              Tools
            </Link>
            <Link className="link" to="/services">
              Services
            </Link>
            <Link className="link" to="/">
              Help
            </Link>
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="buttons">
            <button onClick={handleSearch}>
              <BsSearch />
            </button>
            <button onClick={handleCart}>
              <BsCartFill />
              <span>1</span>
            </button>
            <button>
              <BsHeart />
              <span>3</span>
            </button>
          </div>
        </div>
      </div>
      {search && <Searchbox />}
      <Cart cart={cart} handleCart={handleCart} />
    </div>
  );
};
