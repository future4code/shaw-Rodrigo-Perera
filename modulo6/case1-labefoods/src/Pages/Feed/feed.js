import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/url";
import { Main, Restaurant, SearchInput } from "./styled";
import CardRestaurant from "../../Components/CardRestaurant/CardRestaurant";
import Header from "../../Components/Header/Header";
import FilterByCategory from "./FilterByCategory"

const Feed = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [inputFilterRestaurant, setinputFilterRestaurant] = useState("");
  const [category, setCategory] = useState("")

  useEffect(() => {
    getRestaurants();
  }, []);

  const onChangeRestaurantFilter = (e) => {
    setinputFilterRestaurant(e.target.value);
  };

  const getRestaurants = async () => {
    const { token } = localStorage;
    await axios
      .get(`${BASE_URL}/restaurants`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        setRestaurants(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const restaurantFilter = restaurants
    .filter((restaurant) => {
      if (inputFilterRestaurant === "") {
        return restaurant;
      } else if (
        restaurant.name
          .toLowerCase()
          .includes(inputFilterRestaurant.toLowerCase())
      ) {
        return restaurant;
      }
    })
    .filter((restaurant) => {
        if(restaurant.category === category || category === ""){
            return restaurant
        }
        return false
    })
    .map((restaurant, index) => {
      return <CardRestaurant key={index} restaurant={restaurant} />;
    });

  return (
    <Main>
      <Header title={"FutureEats"} />
      <Restaurant>
        <SearchInput
          onChange={onChangeRestaurantFilter}
          value={inputFilterRestaurant}
        />
        <FilterByCategory setCategory={setCategory}/>
        {restaurantFilter}
      </Restaurant>
    </Main>
  );
};

export default Feed;
