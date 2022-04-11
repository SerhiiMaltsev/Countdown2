import React from 'react';
import './Meal.css';
import Dish from './Dish.js'

function Meal (props){
  return (
      <div className = "Meal">
        {Object.entries(props.dishes).map(([key, value]) => (
          <Dish item = {value} showOnlyVeg = {props.showOnlyVeg}/>
        ))}
      </div>
    );
}
export default Meal;
