import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import candy from '../../assets/shoe.jpeg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Candy Shop</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={candy} alt='A table full of delicious candies!' />
      </div>
    </Fragment>
  );
};

export default Header;