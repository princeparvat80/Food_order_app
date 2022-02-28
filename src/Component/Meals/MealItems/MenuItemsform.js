import React from "react";
import classes from "./MenuIteamsform.module.css";
import Input from "../../UI/Input";
const MenuItemsform = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount :"
        input={{
          id: 'amount'+ props.id,
          type: "number",
          step: "1",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button className={classes.button}>+ Add</button>
    </form>
  );
};

export default MenuItemsform;
