// import { useState } from "react";

// function App() {
//   const [isActive, setIsActive] = useState(false);

//   const handleClick = (div) => {
//     setIsActive((current) => !current);
//   };

//   return (
//     <div className="container">
//       <div
//         className={`panel p1 active ${isActive ? "active" : ""} `}
//         onClick={handleClick}
//       ></div>
//       <div
//         className={`panel p2 ${isActive ? "active" : ""} `}
//         onClick={handleClick}
//       ></div>
//       <div
//         className={`panel p3 ${isActive ? "active" : ""} `}
//         onClick={handleClick}
//       ></div>
//       <div
//         className={`panel p4 ${isActive ? "active" : ""} `}
//         onClick={handleClick}
//       ></div>
//       <div
//         className={`panel p5 ${isActive ? "active" : ""} `}
//         onClick={handleClick}
//       ></div>
//     </div>
//   );
// }

// export default App;

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
