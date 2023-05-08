import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Meal = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const getData = () => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => setData(res.data.meals));
  };

  useEffect(() => getData(), [search]);

  return (
    <div>
      <div className="input-container">
        <h2>Meals</h2>
        <form action="">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            defaultValue={""}
          />
        </form>
      </div>
      <div className="container">
        {data && data.map((meal, index) => <Card key={index} meal={meal} />)}
      </div>
    </div>
  );
};

export default Meal;
