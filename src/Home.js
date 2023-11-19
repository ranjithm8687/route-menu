import React from "react";
import UlItem from "./UlItem";
import AddItem from "./AddItem";
import Search from "./Search";

const Home = ({
  items,
  handleCheck,
  handleDelete,
  addNewItem,
  setAddNewItem,
  handleSubmit,
  search,
  setSearch,
  isLoading,
  fetchError,
}) => {
  return (
    <div className=" h-screen font-Lato flex flex-col place-content-center items-center gap-y-8  ">
      {isLoading && <p>Its Loading...</p>}
      {fetchError && (
        <div
          className="bg-red-100 border w-auto border-red-400 text-red-700 px-4 py-3 rounded "
          role="alert"
        >
          <strong className="font-bold">Error : </strong>
          <span className="block sm:inline">{`${fetchError}`}.</span>
        </div>
      )}

      {!isLoading && !fetchError && (
        <>
          <AddItem
            addNewItem={addNewItem}
            setAddNewItem={setAddNewItem}
            handleSubmit={handleSubmit}
          />
          <Search search={search} setSearch={setSearch} />
          {items.length ? (
            <UlItem
              items={items}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          ) : (
            <div
              className="bg-orange-100 font-Lato  w-80  border-orange-500 text-orange-700 p-4"
              role="alert"
            >
              <p className="font-bold"> Your list is Empty</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
