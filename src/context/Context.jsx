import React, { createContext, useReducer, useContext } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, preducer } from "./redux";

const cart = createContext();
faker.seed(99);

export const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    byStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  const [pstate, pdispatch] = useReducer(preducer,{byStock:false, fastDelivery:false, byRating:0, searchQuery:"",});
  console.log(pstate)

  return <cart.Provider value={{ state, dispatch,pstate, pdispatch}}>{children}</cart.Provider>;
};
export const CartState = () => {
  return useContext(cart);
};

export default Context;