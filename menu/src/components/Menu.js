import React from 'react';
import './Menu.css';
import Meal from './Meal.js';
import {useState} from "react";

function Menu (props) {
  const [showOnlyVegiterian, setShowOnlyVegiterian] = useState(false);
  return(
    <div className="Menu">
      <h1> Menu </h1>
      {!showOnlyVegiterian && <button onClick = {() => setShowOnlyVegiterian(true)} > Show Only Vegeterian </button>}
      {showOnlyVegiterian && <button onClick = {() => setShowOnlyVegiterian(false)} > Show All </button>}
      <h2> Breakfast </h2>
      <Meal dishes = {props.menu.breakfast} showOnlyVeg = {showOnlyVegiterian}/>
      <h2> Lunch </h2>
      <Meal dishes = {props.menu.lunch} showOnlyVeg = {showOnlyVegiterian}/>
      <h2> Dinner </h2>
      <Meal dishes = {props.menu.dinner} showOnlyVeg = {showOnlyVegiterian}/>
    </div>
  );
}

export default Menu;
