import React from "react";

const NewsLetterBox = () => {
    const onSubmitHandler =(event)=>{
        event.preventDefault();

    }
  return (
    <div className="text-center ">
      <div>
        <p className="text-2xl   font-medium text-gray-800">
          Subscribe now & 20% off
        </p>
        <p className="text-gray-400 mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          debitis, error incidunt minus distinctio saepe sit illum dolores aut
        </p>
        <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
            <input type="email" name="" placeholder="Enter Your Email " id="" required className="w-full sm:flex-1 outline-non" />
            <button type="submit" className="bg-black text-white px-10 py-4">SUBSCRIBE</button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetterBox;
