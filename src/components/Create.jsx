import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Create() {
  const navigate = useNavigate();

  const [products, setproducts] = useContext(ProductContext);
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [rating, setrating] = useState("");
  const [description, setdescription] = useState("");

  const addProductHandler = (e) => {
    e.preventDefault();

    if (
      image.trim().length < 5 ||
      title.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      rating === " " ||
      description.trim().length < 5
    ) {
      alert("Please fill all fields with at least 5 characters.");
      return; //it is used to stop the function beacause if user not fill feild then the next not executable
    }

    let product = {
      id: nanoid(),
      image,
      title,
      category,
      price,
      rating,
      description,
    };
    setproducts([...products, product]);
    localStorage.setItem("products", JSON.stringify([...products, product]));
    toast.success("Product Added Successfully")
    navigate("/");
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-slate-300">
      <form
        onSubmit={addProductHandler}
        className="h-auto w-1/2  border px-8 flex  justify-start flex-col gap-8 rounded-xl mt-20 border-black py-10 font-mono"
      >
        <h1 className="text-3xl ">Add Products Datails</h1>
        <input
          type="url"
          name="img"
          id=""
          className="text-lg bg-zinc-200 rounded-xl w-full px-2 py-1 "
          placeholder="Enter Image URL"
          onChange={(e) => setimage(e.target.value)}
          value={image}
        />
        <div className="flex justify-between w-full">
          <input
            type="text"
            name="title"
            id=""
            className="text-lg bg-zinc-200 rounded-xl w-[48%] px-2 py-1 "
            placeholder="Enter Title"
            onChange={(e) => settitle(e.target.value)}
            value={title}
          />
          <input
            type="text"
            name="category"
            id=""
            className="text-lg bg-zinc-200 rounded-xl w-[48%] px-2 py-1 "
            placeholder="Enter Category"
            onChange={(e) => setcategory(e.target.value)}
            value={category}
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
            onChange={(e) => setprice(e.target.value)}
            value={price}
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
            onChange={(e) => setrating(parseFloat(e.target.value, 10))}
            value={rating}
          />
        </div>
        <textarea
          type="text"
          name="description"
          id=""
          rows={5}
          className="text-lg bg-zinc-200 rounded-xl w-full px-2 py-1 "
          placeholder="Enter Product description..."
          onChange={(e) => setdescription(e.target.value)}
          value={description}
        />
        <button className="h-10 w-44 px-1 py-2 border-2 border-black text-black rounded-xl text-lg hover:bg-[#46586f50] ">
          Add New Products
        </button>
      </form>
    </div>
  );
}

export default Create;
