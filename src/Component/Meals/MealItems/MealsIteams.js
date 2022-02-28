import React from 'react'
import classes from './MealsIteams.module.css'
import MenuItemsform from "./MenuItemsform";

const MealsIteams = (props) => {
    const price = `₹.${props.price}`
  return (
    <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
        <MenuItemsform id={props.id} />
        </div>
    </li>
  )
}

export default MealsIteams