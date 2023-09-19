import Card from "../UI/Card";
import classes from './Adding.module.css';
import Button from "../UI/Button";
import { useRef, useState } from "react";
import Modal from "../UI/Modal";
const Adding=(props)=>{
    const nameRef=useRef();
    const ageRef=useRef();
    const collegeRef=useRef();
    const [error, setError]=useState();
    const [cart, setCart] = useState([]);       
    const [showCart, setShowCart] = useState(false);
    
    const addUser=(e)=>{
        e.preventDefault();
        const enteredName=nameRef.current.value;
        const enteredUserAge=ageRef.current.value;
        const enteredCollege=collegeRef.current.value;
        if (enteredName.trim().length===0 || enteredUserAge.trim().length===0){
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid candy and price.'
            });
            return; 
        }
        if (+enteredUserAge < 1){
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid price.'
            });
            return;
        }
        props.onAdd(enteredName,enteredUserAge,enteredCollege);
        
        setCart((prevCart) => [
            ...prevCart,
            {
              name: enteredName,
              college: enteredCollege,
              age: enteredUserAge,
            },
          ]);
        nameRef.current.value='';
        ageRef.current.value='';
        collegeRef.current.value='';
    }

    const errorhandler=()=>{
        setError(null);
    }
    const openCartHandler = () => {
        setShowCart(true);
      };
    
    const closeCartHandler = () => {
        setShowCart(false);
      };

    return (
        <>
        {error && (
            <Modal
              title={error.title}
              message={error.message}
              onConfirm={errorhandler}
            />
          )}
          {showCart && (
            <Modal title="Your Cart" message="Cart contents go here" onConfirm={closeCartHandler} />
          )}
            <Card className={classes.input}>
                <form onSubmit={addUser} >
                    <label htmlFor="username">Candy Name</label>
                    <input type="text" id="username" ref={nameRef}/>
                    <label htmlFor="college">Candy Description</label>
                    <input type="text" id="college" ref={collegeRef}/>
                    <label htmlFor="age">Price</label>
                    <input type="number" id="age" ref={ageRef}/>
                    <Button type="submit">Add</Button>
                    <Button onClick={openCartHandler}>Open Cart</Button>
                </form>
            </Card>
        </>
    )
}

export default Adding;  