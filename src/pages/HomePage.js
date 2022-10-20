import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toollist } from "../components/Toollist";

const HomePage = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear("token");
    navigate("/login");
  };

  return (
    <div className="custom-container">
      <Toollist />
      <Toollist />
      <Toollist />
    </div>
  );
};

export default HomePage;
