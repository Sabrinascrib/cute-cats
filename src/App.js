import { useState } from "react";
import "./index.css";

function App() {
  const [appState, changeState] = useState({
    activeAbject: null,
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
  });

  function toggleActive(index) {
    changeState({ ...appState, activeObject: appState.objects[index] });
  }

  function toggleActiveStyles(index) {
    if (appState.objects[index] === appState.activeObject) {
      return "panel active";
    } else {
      return "panel inactive";
    }
  }

  return (
    <div className="container">
      {appState.objects.map((elemnts, index) => (
        <div
          key={index}
          className={toggleActiveStyles(index)}
          onClick={() => {
            toggleActive(index);
          }}
        ></div>
      ))}
    </div>
  );
}

export default App;
