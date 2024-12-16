import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Controller from "./Controller";
import "./css/Game.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store/store";
import CustomNight from "./CustomNight";

const stateFromStorage = localStorage.getItem("stages");
const initialState = stateFromStorage ? JSON.parse(stateFromStorage) : {
  mode: "NORMAL",
  Freddy: 10,
  Bonnie: 10,
  Chica: 10,
  Foxy: 10,
};

const Start = () => {
  const [Start, setStart] = useState(false);

  const [stages, reactSetStages] = useState(initialState);
  function setStages(getNewStages) {
    const newStages = getNewStages(stages);
    reactSetStages(newStages);
    localStorage.setItem("stages", JSON.stringify(newStages));
  };

  const [hourLength, setHourLength] = useState(89000);

  useEffect(() => {
    console.log(window.innerHeight > window.innerWidth);
    if (window.innerHeight > window.innerWidth) {
      window.alert(
        "Rotate your phone to landscape mode for a better experience."
      );
    }
  }, []);

  return (
    <>
      {!Start ? (
        <div className="custom-night">
          <CustomNight
            setStart={setStart}
            state={{ ranges: stages, setStages, setHourLength }}
            hourLength={hourLength}
            setHourLength={setHourLength}
          />
        </div>
      ) : (
        <Controller stages={stages} setStart={setStart} hourLength={hourLength} />
      )}
    </>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Start />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
