import React, { useContext, useState } from "react";
import "./SearchPanel.css";
import { Context } from "../../context/context";

const SearchPanel = () => {
  const [term, setTerm] = useState("");

  const { state, dispatch } = useContext(Context);

  const updateTermHandle1 = (e) => {
    const newTerm = e.target.value.toLowerCase(); // Changed variable name to newTerm
    setTerm(newTerm);
    dispatch({ type: "ON_TERM", payload: newTerm });
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Kinolarni qidirish"
      onChange={updateTermHandle1}
      value={term}
    />
  );
};

export default SearchPanel;
