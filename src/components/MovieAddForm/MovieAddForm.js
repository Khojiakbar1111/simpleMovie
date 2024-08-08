import React, { useContext, useState } from "react";
import "./MovieAddForm.css";
import { Context } from "../../context/context";

// mutable - that can be changed; likely to change.
// immutable - that cannot be changed.

const MoviesAddForm = ({ addForm }) => {
  const [state, setState] = useState({ movieName: "", views: "" });

  const { _, dispatch } = useContext(Context);

  const handleEventTarget = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();

    if (state.movieName !== "" || state.views !== "") {
      const data = { movieName: state.movieName, viewers: state.views };
      dispatch({ type: "ADD_FORM", payload: data });
    } else {
      alert("Please fill the gaps");
    }

    setState({
      movieName: "",
      views: "",
    });
  };

  return (
    <div className="movies-add-form">
      <h3>Yangi kino qo'shish</h3>
      <form className="add-form d-flex" onSubmit={onSubmitHandle}>
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Qanday kino?"
          name="movieName"
          onChange={handleEventTarget}
          value={state.movieName}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Nechi marotaba ko'rilgan?"
          name="views"
          onChange={handleEventTarget}
          value={state.views}
        />
        <button type="submit" className="btn btn-outline-dark">
          Qo'shish
        </button>
      </form>
    </div>
  );
};

export default MoviesAddForm;
