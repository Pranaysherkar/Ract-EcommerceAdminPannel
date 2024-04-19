import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const [products, setproducts] = useContext(ProductContext);
  const { id } = useParams();
  const [product, setproduct] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    rating: "",
    description: "",
  });

  const changeHandler = (e) => {
    

    setproduct({...product,[e.target.name]: e.target.value});

  };

  const navigate = useNavigate(null);
  useEffect(() => {
    setproduct(products.filter((elem) => elem.id == id)[0]);
  }, [id]);

  const addProductHandler = (e) => {
    e.preventDefault();

    if (
      product.image.trim().length < 5 ||
      product.title.trim().length < 5 ||
      product.category.trim().length < 5 ||
      product.price.trim().length < 1 ||
      product.rating === " " ||
      product.description.trim().length < 5
    ) {
      alert("Please fill all fields with at least 5 characters.");
      return; //it is used to stop the function beacause if user not fill feild then the next not executable
    }

    const pIndex = products.findIndex(elem=> elem.id == id);
    const CopyData=[...products];
    CopyData[pIndex]={...products[pIndex],...product}

    setproducts(CopyData);
    localStorage.setItem("products", JSON.stringify(CopyData));
    navigate(-1);
  };
  return (
    <div className="h-screen w-full flex items-center justify-center bg-slate-300">
      <form
        onSubmit={addProductHandler}
        className="h-auto w-1/2  border px-8 flex  justify-start flex-col gap-8 rounded-xl mt-20 border-black py-10 font-mono"
      >
        <h1 className="text-3xl ">Edit Products Datails</h1>
        <input
          type="url"
          name="image"
          id=""
          className="text-lg bg-zinc-200 rounded-xl w-full px-2 py-1 "
          placeholder="Enter Image URL"
          onChange={changeHandler}
          value={product && product.image}
        />
        <div className="flex justify-between w-full">
          <input
            type="text"
            name="title"
            id=""
            className="text-lg bg-zinc-200 rounded-xl w-[48%] px-2 py-1 "
            placeholder="Enter Title"
            onChange={changeHandler}
            value={product && product.title}
          />
          <input
            type="text"
            name="category"
            id=""
            className="text-lg bg-zinc-200 rounded-xl w-[48%] px-2 py-1 "
            placeholder="Enter Category"
            onChange={changeHandler}
            value={product && product.category}
          />
        </div>
        <div className="flex justify-between w-full">
          <input
            type="number"
            name="price"
            id=""
            step={0.1}
            className="text-lg bg-zinc-200 rounded-xl w-[48%] px-2 py-1 "
            placeholder="Enter Price in USD"
            onChange={changeHandler}
            value={product && product.price}
          />
          <input
            type="number"
            min={1}
            max={5}
            step={0.1}
            name="rating"
            id=""
            className="text-lg bg-zinc-200 rounded-xl w-[48%] px-2 py-1 "
            placeholder="Enter Rating"
            onChange={changeHandler}
            value={product && product.rating}
          />
        </div>
        <textarea
          type="text"
          name="description"
          id=""
          rows={5}
          className="text-lg bg-zinc-200 rounded-xl w-full px-2 py-1 "
          placeholder="Enter Product description..."
          onChange={changeHandler}
          value={product && product.description}
        />
        <button className="h-10 w-44 px-1 py-2 border-2 border-black text-black rounded-xl text-lg hover:bg-[#46586f50] ">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Edit;
