import React from "react";
import Meals from "../../assets/Images/meals.jpg";

import classes from "../Layout/Header.module.scss";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {

    return (
        <>   
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onCartShow}/>
        </header>
        <div>
            <img  className={classes['main-image']} src={Meals} alt="A table full of delicious food!"/>
        </div>
        </>
    );

}
export default Header;