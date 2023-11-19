import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import StateMan from "./StateMan";
import { useEffect, useState } from "react";
import BoxChangeBg from "./BoxChangeBg";
import apiRequest from "./apiRequest";

function App() {
  const API_URL = "http://localhost:3500/items";
  const [items, setItems] = useState([]);

  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Data not Received");
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      fetchItems();
    }, 2000);
  }, []);

  const [addNewItem, setAddNewItem] = useState("");

  const [search, setSearch] = useState("");

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const itemLayout = { id, checked: false, item };
    const listItems = [...items, itemLayout];
    setItems(listItems);
    // localStorage.setItem("todo_list", JSON.stringify(listItems));

    const postOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemLayout),
    };

    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  };

  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    // localStorage.setItem("todo_list", JSON.stringify(listItems));

    const myItem = listItems.filter((item) => item.id === id);

    const updateOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ checked: myItem[0].checked }),
    };

    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  };

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    // localStorage.setItem("todo_list", JSON.stringify(listItems));

    const deleteOptions = {
      method: "DELETE",
    };

    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!addNewItem) return;
    // console.log(addNewItem);
    addItem(addNewItem);
    setAddNewItem("");
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items.filter((item) =>
                item.item.toLowerCase().includes(search.toLowerCase())
              )}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
              addNewItem={addNewItem}
              setAddNewItem={setAddNewItem}
              handleSubmit={handleSubmit}
              search={search}
              setSearch={setSearch}
              isLoading={isLoading}
              fetchError={fetchError}
            />
          }
        />
        <Route path="/stateman" element={<StateMan />} />
        <Route path="/boxchangebg" element={<BoxChangeBg />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
