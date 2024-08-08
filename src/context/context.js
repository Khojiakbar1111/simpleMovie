import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const initialValue = {
  movieData: [],
  term: "",
  filter: "all",
};

export const Context = createContext();

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_DATA":
      return { ...state, movieData: payload };
    case "ON_DELETE":
      const deletedData = state.movieData.filter(
        (movie) => movie.id !== payload
      );
      return { ...state, movieData: deletedData };
    case "ON_TOGGLE":
      const { id, prop } = payload;
      const toggleArr = state.movieData.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      });
      return { ...state, movieData: toggleArr };
    case "ADD_FORM":
      const { movieName, viewers } = payload;
      const data = {
        movieName,
        viewers,
        id: uuidv4(),
        favourite: false,
        like: false,
      };
      return { ...state, movieData: [...state.movieData, data] };
    case "ON_TERM":
      return { ...state, term: payload };
    case "ON_FILTER":
      return { ...state, filter: payload };
    default:
      return { state };
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Provider;
