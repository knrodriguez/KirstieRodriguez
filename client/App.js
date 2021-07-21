import React, {useState} from "react";
import ReactDOM from "react-dom";
import { AboutMeView, TechStackView } from "./views";

const App = () => {
  const [coding, setCoding] = useState(false);

  return (
    <>
      <AboutMeView setCoding={setCoding}/>
      { coding && 
        <>
          <TechStackView/>
        </>
      }
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
