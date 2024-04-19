import React, { useContext, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import { ProductContext } from "../utils/Context";
import { Link, useLocation } from "react-router-dom";
import axios from "../utils/axios";

function Home() {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const [filterproducts, setFilterproducts] = useState(products);
  // const getProductscategory = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/category/${category}`);
  //     setFilterproducts(data);
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  useEffect(() => {
    if (!filterproducts || category == "undefined") setFilterproducts(products);
    if (category != "undefined") {
      // getProductscategory();
      setFilterproducts(products.filter((elem) => elem.category == category));
    }
  }, [category, products]);
  const truncateTitle = (title, maxlength) => {
    if (title.length > maxlength) {
      return title.substring(0, maxlength) + "....";
    } else {
      return title;
    }
  };
  return (
    <div className="h-screen w-full flex overflow-hidden">
      <Sidebar />
      {products ? (
        <div className="min-h-screen w-screen mt-16 flex items-center justify-center flex-wrap gap-12 overflow-y-auto py-20">
          {filterproducts &&
            filterproducts.map((items) => (
              <Link
                to={`/details/${items.id}`}
                key={items.id}
                className="w-1/5 h-2/3 border-[#E2E8F0] border-2  py-2 rounded-xl overflow-hidden "
              >
                <div className="h-[65%] w-[80%] m-auto rounded-xl overflow-hidden hover:scale-105 ">
                  <img
                    className=" h-full w-full object-fill"
                    src={items.image}
                    alt=" loading"
                  />
                </div>
                <div className="h-[40%] w-full bg-[#ecf3f9] px-1 py-1">
                  <h1 className=" text-sm h-14 w-auto text-center mt-4 font-medium ">
                    {truncateTitle(items.title, 50)}
                  </h1>

                  <div className="flex items-center justify-center gap-16">
                    <h1 className=" text-xl h-auto w-auto text-center text-white mt-2 font-bold bg-[#46586f] px-2 rounded-lg">
                      $ {items.price}
                    </h1>
                    <h1 className=" text-base h-auto w-auto text-center text-white mt-2  px-2 rounded-lg font-semibold bg-green-400">
                      ★ {items.rating.rate || items.rating}
                    </h1>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Home;
