import React, { useEffect, useState } from "react";
import Meals from "../Meals/Meals";
import "./MealsBody.css";

const MealsBody = () => {
  const [keyword, setKeyword] = useState('')
  const handleSearch = () => {
    const input = document.getElementById('input').value;
    setKeyword(input);
  }
  

  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [keyword]);


  const handleCartBtnEvent = (name) => {
    const container = document.getElementById('cart-items');
    const p = document.createElement('p');
    p.classList.add('cart-list-item')
    p.innerText = name;
    if(container.innerHTML.includes(name)){
      alert('exists');
      return;
    }
    container.appendChild(p);
  }

  return (
    <div className="container">
      <div className="meals-container">
        <div>
          <input
            type="text"
            id="input"
            className="input-field"
            placeholder="Search"
          />
          <button className="search-btn" onClick={handleSearch}>Search</button>
        </div>
        <div className="all-carts">
          {meals.map((meal) => (
            <Meals meal={meal} event={handleCartBtnEvent} key={meal.idMeal}></Meals>
          ))}
        </div>
      </div>
      <div className="cart-container">
        <h2 className="cart-title">Cart</h2>
        <div id="cart-items">
         
        </div>
      </div>
    </div>
  );
};

export default MealsBody;
