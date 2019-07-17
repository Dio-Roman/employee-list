import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const BackBtn = () => {
  return (
    <Link to={`/`}>
    <button className='back-btn'>&#8592; Back</button>
    </Link>
  )
  
};

export default BackBtn;
