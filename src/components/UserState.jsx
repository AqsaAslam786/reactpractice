import React, { useState } from "react";

const UserState = () => {
  const [count, setCount] = useState (0);

  const handelCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="bg-white w-60 h-65 shadow justify-center items-center flex flex-col mt-0 rounded-2xl">
      <div className="border-2 border-blue-400 w-55 h-45 rounded-2xl font-bold">
        {count}
      </div>
      {/* Event Handelers  */}
      <button
        onClick={handelCount}
        className="bg-blue-500 w-50 h-10 rounded-2xl text-white font-bold mt-5"
      >
        Increase Value
      </button>
      <p>{count}</p>
      <input onChange={(e)=>{e.target.valueAsNumber}} type="number" value={count} className="border"/>
    </div>
  );
};

export default UserState;
