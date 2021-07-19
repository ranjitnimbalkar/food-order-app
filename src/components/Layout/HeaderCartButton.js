import React from 'react';
import CartIcon  from '../Cart/CartIcon';
import clasess from './HeaderCartButton.module.css';

const HeaderCartButton = props=> {
    return <button className={clasess.button} onClick={props.onClick}>
        <span className={clasess.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={clasess.badge}>3</span>
    </button>
};


export default HeaderCartButton;