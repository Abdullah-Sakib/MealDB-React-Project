import React from 'react';
import './Meals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Meals = ({meal, event }) => {
  const {strMeal, strInstructions, strMealThumb} = meal ;
  return (
    <div className='cart'>
      <img src={strMealThumb} className='img' alt="" />
      <h3 className='meal-name'>{strMeal}</h3>
      <p className='meal-text'>{strInstructions.slice(0, 100)}...</p>
      <button className='cart-btn' onClick={()=> event(strMeal)}>
        <p className='btn-text'>Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Meals;