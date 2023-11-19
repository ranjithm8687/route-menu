import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const ListItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <>
      <li className=" flex bg-slate-200 my-2 px-3 py-2">
        <input
          className=" w-16 h-16"
          type="checkbox"
          onChange={() => handleCheck(item.id)}
          checked={item.checked}
        />
        <label
          className={`text-2xl grid  items-center   w-5/6 pl-3 ${
            item.checked ? "line-through" : null
          }`}
          onClick={() => handleCheck(item.id)}
        >
          {item.item}
        </label>
        <FaTrashAlt
          className="  w-16 w h-16 text-cyan-600 hover:text-red-600"
          onClick={() => handleDelete(item.id)}
          role="button"
          tabIndex="0"
          aria-label={`Delete ${item.item}`}
        />
      </li>
    </>
  );
};

export default ListItem;
