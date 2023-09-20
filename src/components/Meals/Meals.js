import MealsSummary from "./MealsSummary";
import AvailabeMeals from "./AvailableMeals";
import { useState } from "react";

const Meals=()=>{
    const DUMMY_MEALS = [
        {
          id: 'm1',
          name: 'Eclairs',
          description: 'Indulgent Chocolate-Filled Delights."',
          price: 4.99,
        },
        {
          id: 'm2',
          name: 'Mango Bite',
          description: 'Tropical Mango Bliss',
          price: 2.99,
        },
        {
          id: 'm3',
          name: 'Pulse',
          description: 'Intense Flavor Explosion in Every Pulse.',
          price: 4.99,
        },
        {
          id: 'm4',
          name: 'Kismi',
          description: `India's Favorite Candy.`,
          price: 2.99,
        },
      ];
      const initialMeals = [...DUMMY_MEALS];
      const [meals, setMeals] = useState(initialMeals);
      const addCandyHandler = (newCandy) => {
        setMeals((prevMeals) => [...prevMeals, newCandy]);
      };
    return (
        <>
            <MealsSummary onAddCandy={addCandyHandler} />
            <AvailabeMeals meals={meals} />
        </>
    )
}

export default Meals;