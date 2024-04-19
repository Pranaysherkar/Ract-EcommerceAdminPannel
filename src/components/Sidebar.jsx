import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";

function Sidebar() {
  const [products] = useContext(ProductContext);

  let categories =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);

  categories = [...new Set(categories)];

 


  return (
    <div className="w-1/6 min-h-screen mt-20 bg-slate-200 py-10  px-4 ">
      <Link to={"/create"} className="px-1 py-2 border border-black text-black rounded-xl">
        Add New Products
      </Link>
      <h1 className="w-full mt-14 text-xl font-semibold text-left ">
        Category Filter
      </h1>
      <div className="w-full text-base text-left mt-8 capitalize flex flex-col gap-1">
        {categories.map((elem, index) => (
          <Link to={`/?categiory=${elem}`} key={index} className="text-lg hover:text-slate-500 flex items-center gap-2" >
            <span
              className="w-3 h-3 rounded-md inline-block bg-white border-violet-500 border-2"
            ></span>
            {elem}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
