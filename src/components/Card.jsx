import { BsCartFill, BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Card = () => {

  return (
    <div className="card">
      <div className="cover">
        <img src="https://picsum.photos/600/600" alt="random image" />
      </div>
      <div className="detail">
        <div className="desc">
          <Link to={"/"}>
            <h2>Product Name</h2>
          </Link>
          <span className="price">$0.00</span>
        </div>
        <div className="buttons">
          <button>
            <BsCartFill />
          </button>
          <button>
            <BsHeart />
          </button>
        </div>
      </div>
    </div>
  );
};
