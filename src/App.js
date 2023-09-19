import './App.css';
import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Adding from './components/Items/Adding';
import List from './components/Items/List';
import Cart from './components/Cart/Cart';
import CartProvider from './store/cart-provider';

function App() {
  const [userList, setUserList]=useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addUser=(username,userage,usercollege)=>{
    setUserList((prev)=>{
      return [...prev, {name: username, age: userage, id: Math.random().toString(), college: usercollege}]
    });
  }
  const addToCartHandler = (user) => {
    setCartItems((prevCart) => [...prevCart, user]);
  };

  const enableCart = () => {
    setShowCart(true);
  };

  const disableCart = () => {
    setShowCart(false);
  };
  return (
    <CartProvider>
      {showCart&&<Cart onClose={disableCart} cartItems={cartItems}/>}
      <Header onShow={enableCart}/>
      <Adding onAdd={addUser} />
      <List users={userList} onAddToCart={addToCartHandler} />
    </CartProvider>
  );
}

export default App;
