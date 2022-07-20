import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/Cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.scss";

const HeaderCartButton = (props) => {
    const [btnIsHighLighted,setBtnisHighLighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);


    const btnClasses = `${classes.button}  ${btnIsHighLighted ? classes.bump : " "}`;
    
    useEffect(() => {
        if(items.length === 0){
           return;
        }
        setBtnisHighLighted(true);
       const Timer =  setTimeout(() => {
            setBtnisHighLighted(false);
        },300);

        return () => {
            clearTimeout(Timer);
        };
    },[items])

    return(
        <>
            <button className={btnClasses} onClick={props.onClick}>
                <span className={classes.icon}>
                    <CartIcon/>
                </span>
                <span>
                    Your Cart
                </span>
                <span className={classes.badge}>
                    {numberOfCartItems}
                </span>

            </button>
        </>
    );

}
export default HeaderCartButton;
