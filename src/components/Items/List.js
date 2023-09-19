// List.js
import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./List.module.css";

const List = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} Rs.) - {user.college}
            <Button onClick={() => props.onAddToCart(user)}>Buy 1</Button>
            <Button onClick={() => props.onAddToCart(user)}>Buy 2</Button>
            <Button onClick={() => props.onAddToCart(user)}>Buy 3</Button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default List;
