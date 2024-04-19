import axios from "../utils/axios";
import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import { ProductContext } from "../utils/Context";

function Details() {
  const navigate = useNavigate();
  const [products, setproducts] = useContext(ProductContext);
  const [product, setproduct] = useState(null);
  const { id } = useParams();

  // const getSingleproduct = async () => {
  //   // try {
  //   //   const { data } = await axios.get(`/products/${id}`);
  //   //   setproduct(data);
  //   // } catch (err) {
  //   //   console.log(err);
  //   // }
  // };

  useEffect(() => {
    if (!product) {
      setproduct(products.filter((elem) => elem.id == id)[0]);
    }
    // getSingleproduct();
  }, []);

  const deleteProducts = (id) => {
    const FiterProduct = products.filter((elem) => elem.id !== id);
    setproducts(FiterProduct);
    localStorage.setItem("products",JSON.stringify(FiterProduct))
    navigate("/");
  };
  return product ? (
    <div className="w-[70%] h-full m-auto flex items-center justify-center gap-10">
      <img className="w-auto h-2/4 " src={product.image} alt="loading.." />

      <div className="content w-[65%] text-left bg-gray-200 px-5 py-8 rounded-xl">
        <h1 className=" text-3xl font-semibold w-auto">{product.title}</h1>
        <h1 className="text-xl mt-3 font-medium text-zinc-500">
          {product.category}
        </h1>
        <div className="flex items-center gap-32">
          <h1 className=" text-lg mt-2 font-bold text-zinc-100 bg-blue-600 inline-block p-1 rounded-lg">
            $ {product.price}
          </h1>
          <h1 className=" text-lg mt-2 font-bold text-zinc-100 bg-green-500 inline-block p-1 rounded-lg">
            ★ {product.rating.rate || product.rating}
          </h1>
        </div>
        <p className="text-base my-5 tracking-wide">{product.description}</p>
        <div className="flex items-center gap-20">
          <Link
          to={`/edit/${product.id}`}
            type="button"
            className="text-white font-semibold bg-blue-600 hover:bg-black  px-2 py-1 rounded-lg"
          >
            Edit
          </Link>
          <button
            type="button"
            onClick={() => deleteProducts(product.id)}
            className="text-white font-semibold bg-red-600  hover:bg-black px-2 py-1 rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Details;
