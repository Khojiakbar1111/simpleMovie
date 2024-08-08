import { useContext } from "react";
import "./AppInfo.css";
import { Context } from "../../context/context";

const AppInfo = () => {
  const { state, dipatch } = useContext(Context);

  return (
    <div className="app-info">
      <p className="fs-3 text-uppercase">
        Barcha kinolar soni: {state.movieData.length}
      </p>
      <p className="fs-4 text-uppercase">
        Sevimli film: {state.movieData.filter((item) => item.favourite).length}
      </p>
    </div>
  );
};

export default AppInfo;
