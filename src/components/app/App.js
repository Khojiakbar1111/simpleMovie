import React, { useContext, useEffect, useState } from "react";
import "./app.css";
import AppFilter from "../app-filter/AppFilter";
import AppInfo from "../app-info/AppInfo";
import MovieList from "../MovieList/MovieList";
import MoviesAddForm from "../MovieAddForm/MovieAddForm";
import SearchPanel from "../SearchPanel/SearchPanel";
import { v4 as uuidv4 } from "uuid";
import { Context } from "../../context/context";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users?_start=0&_limit=5")
      .then((response) => response.json())
      .then((json) => {
        const newArr = json.map((item) => ({
          movieName: item.name,
          id: item.id,
          favourite: false,
          like: false,
          viewers: item.id * 40,
        }));
        dispatch({ type: "GET_DATA", payload: newArr });
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        {isLoading && <h1>Loading...</h1>}
        <MovieList />
        <MoviesAddForm />
      </div>
    </div>
  );
};

export default App;
