

import classes from './MealItemForm.module.css';
import { useState } from 'react';

const MealItemForm = (props) => {
  const [selectedAmount, setSelectedAmount] = useState(1);

  const handleAmountChange = (event) => {
    setSelectedAmount(event.target.value);
  };

  const handleAddToCart = () => {
      props.onAddToCart(+selectedAmount);
  };

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label>Item Quantity</label>
        <select onChange={handleAmountChange} value={selectedAmount}>
          <option value="1">Buy 1</option>
          <option value="2">Buy 2</option>
          <option value="3">Buy 3</option>
        </select>
      </div>
      <button type="button" onClick={handleAddToCart}>
        Add Item
      </button>
    </form>
  );
};

export default MealItemForm;
