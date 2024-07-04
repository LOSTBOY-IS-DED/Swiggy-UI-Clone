import React, { useState, useEffect } from "react";
import Card from "./Card"; // Make sure to import the Card component

const OnlineDelivery = () => {
  const [data, setData] = useState([]);

  const fetchTopRestaurant = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/top-restaurant-chains"
      );
      const apiData = await response.json();
      console.log("API Response:", apiData); // Log the response to debug
      setData(Array.isArray(apiData) ? apiData : []);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">
          Top restaurant chains in Jamshedpur
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {data.map((d, i) => (
          <Card {...d} key={i} />
        ))}
      </div>
    </div>
  );
};

export default OnlineDelivery;
