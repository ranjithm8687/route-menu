import React from "react";
import ListItem from "./ListItem";

const UlItem = ({ items, handleCheck, handleDelete }) => {
  return (
    <div>
      <ul>
        <div
          className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
          role="alert"
        >
          <p>
            You have add
            <span className=" font-bold"> {items.length} </span>
            list in your list {items.length === 1 ? " item" : " items"}
          </p>
        </div>

        {items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default UlItem;
