import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

//This is Button in Header which is use to check the item in cart.
const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        {" "}
        <CartIcon />{" "}
      </span>
      <span>Your Cart</span>
      {/* This is span will hold the logic to show the num of iteam available in cart */}
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
