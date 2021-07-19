import React from 'react';
import classes from './Header.module.css';
import headerImg from '../../static/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>RajVeer Food's</h1>
            <HeaderCartButton  onClick={props.onShowCart}></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={headerImg} alt="A table full of delicous food!!"/>
        </div>
    </React.Fragment>; 
}

export default Header;