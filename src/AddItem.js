import React, { useRef } from "react";

const AddItem = ({ addNewItem, setAddNewItem, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className=" flex place-items-center  space-x-3 "
      >
        <label htmlFor="addItem"> AddItem </label>
        <input
          type="text"
          className="w-full border-2 p-2 rounded"
          id="addItem"
          ref={inputRef}
          required
          value={addNewItem}
          onChange={(e) => setAddNewItem(e.target.value)}
          placeholder="Add Item"
        />
        <button
          onClick={() => inputRef.current.focus()}
          type="submit"
          aria-label="Add item"
          className="border-2 p-2 rounded hover:bg-green-500 hover:border-green-500 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>{" "}
        </button>{" "}
      </form>{" "}
    </div>
  );
};

export default AddItem;
