import { useContext } from "react";
import "./AppFilter.css";
import { Context } from "../../context/context";

const AppFilter = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <div className="btn-group">
      {filterBtns.map((btn) => (
        <button
          key={btn.name}
          className={`btn ${
            state.filter === btn.name ? "btn-dark" : "btn-outline-dark"
          }`}
          type="button"
          onClick={() => dispatch({ type: "ON_FILTER", payload: btn.name })}
        >
          {btn.lable}
        </button>
      ))}
    </div>
  );
};

const filterBtns = [
  { name: "all", lable: "Barcha kinolar" },
  { name: "popular", lable: "Mashxur kinolar" },
  { name: "mostWatched", lable: "Ko'p ko'rilgan kinolar" },
];

export default AppFilter;
