import React from 'react';
import './Meal.css';

function Dish (props){
  console.log(props.item)
  return (
    <div className = "Dish">
      {!props.showOnlyVeg && <p> {props.item.food} - (${props.item.price}) </p>}
      {props.showOnlyVeg && props.item.vegetarian && <p> {props.item.food} - (${props.item.price}) </p>}
    </div>
  );

}
export default Dish;
