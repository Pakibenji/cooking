import React from "react";
import { useState } from "react";

const Card = ({ meal }) => {
  return (
    <div className="card">
      <h3>{meal.strMeal}</h3>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>{meal.strArea}</p>
    </div>
  );
};

export default Card;
