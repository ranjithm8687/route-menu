import React, { useState } from "react";

const StateMan = () => {
  const [name, setName] = useState("Earn");

  const handleChange = () => {
    const names = ["Earn", "Give", "Grove"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < 99) {
      setCount((preCount) => preCount + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount((preCount) => preCount - 1);
    }
  };

  return (
    <div className=" h-screen text-center  font-Lato">
      <div className=" pt-10 space-y-6">
        <div className=" space-y-4">
          <h1>
            Let 's
            <span className=" px-3 text-2xl font-bold text-green-600">
              {name}
            </span>
            Money
          </h1>
          <button
            onClick={handleChange}
            className=" border-2 text-lg px-3 py-2 rounded-md hover:bg-orange-500 hover:text-white"
          >
            Change
          </button>
        </div>
        <div className=" space-y-4">
          <button
            onClick={increment}
            className=" border-2 text-lg px-3 py-2 rounded-md hover:bg-orange-500 hover:text-white"
          >
            +
          </button>
          <div>{count}</div>

          <button
            onClick={decrement}
            className=" border-2 text-lg px-3 py-2 rounded-md hover:bg-orange-500 hover:text-white"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default StateMan;
