import classes from './MealsSummary.module.css';

const MealsSummary=({ onAddCandy })=>{
    const submitHandler = (event) => {
        event.preventDefault();
    
        const name = event.target.name.value;
        const description = event.target.desc.value;
        const price = parseFloat(event.target.price.value);
    
        if (name && description && !isNaN(price)) {
          const newCandy = {
            id: Math.random().toString(),
            name: name,
            description: description,
            price: price,
          };
          onAddCandy(newCandy);
          event.target.reset();
        }
      };
    return(
        <form onSubmit={submitHandler}>
            <section className={classes.summary}>
                <h2>Sweet Temptations Await You at Candyland Delights</h2>
                <label htmlFor='name' >Candy Name </label>
                <input id='name' type='text'/>
                <label htmlFor='desc' >Candy Description </label>
                <input id='desc' type='text'/>
                <label htmlFor='price' >Candy Price </label>
                <input id='price' type='number'/>
                <button type='submit'>Add Candy</button>
            </section>
        </form>
    )
}

export default MealsSummary;