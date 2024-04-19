import axios from "./axios";
import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

function Context(props) {
  const [products, setproducts] = useState(JSON.parse(localStorage.getItem("products")) || null);

  // const getProducts = async()=>{
  //   try{
  //     const {data}=await axios.get("/products");
  //     setproducts(data)
  //   }catch(err){
  //     console.log(err);
  //   }
  // };
  // useEffect(()=>{
  //   getProducts();
  // },[])
  console.log(products);
  return (
    <ProductContext.Provider value={[products, setproducts]}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default Context;
