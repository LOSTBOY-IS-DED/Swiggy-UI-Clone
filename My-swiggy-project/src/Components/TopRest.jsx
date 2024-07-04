import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Card from "./Card";

const TopRest = () => {
  const [data, setData] = useState([]);
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    if (categories.length - 4 === slide) return false;
    setSlide(slide + 3);
  };

  const prevSlide = () => {
    if (slide === 0) return false;
    setSlide(slide - 3);
  };

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
        <div className="flex">
          <div
            className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </div>
          <div
            className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex gap-5 overflow-hidden">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((d, i) => <Card {...d} key={i} />)
        ) : (
          <div>No data available</div>
        )}
      </div>
      <hr className="my-3 border-[1px]"></hr>
    </div>
  );
};

export default TopRest;
