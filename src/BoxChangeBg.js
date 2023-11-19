import React, { useState } from "react";
import colorNames from "colornames";

const BoxChangeBg = () => {
  const [colorValue, setColorValue] = useState("");
  const [haxValue, setHaxValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="h-screen font-Lato flex flex-col place-content-center items-center gap-y-8 ">
      <div
        style={{
          backgroundColor: colorValue,
          color: isDarkText ? "#000000" : "#FFFFFF",
        }}
        className="w-48 h-48 border-2 rounded shadow-lg flex flex-col place-items-center place-content-center"
      >
        <p>{colorValue ? colorValue : "Empty Value"}</p>
        <p>{haxValue ? haxValue : null}</p>
      </div>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Add Color Name"
            required
            className=" border-2 rounded shadow-lg p-2"
            value={colorValue}
            onChange={(e) => {
              setColorValue(e.target.value);
              setHaxValue(colorNames(e.target.value));
            }}
          />
        </form>
      </div>
      <div>
        <button
          type="button"
          onClick={() => setIsDarkText(!isDarkText)}
          className=" w-48 border-2 rounded shadow-lg p-2"
        >
          Toggle Text Color
        </button>
      </div>
    </div>
  );
};

BoxChangeBg.defaultProps = {
  colorValue: "Empty Color Value",
};

export default BoxChangeBg;
