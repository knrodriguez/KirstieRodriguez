import React, {useState} from "react";
import ReactDOM from "react-dom";
import { AboutMeView, TechStackView, ProjectsView } from "./views";

const App = () => {
  const [coding, setCoding] = useState(0);

  return (
    <>
      <AboutMeView coding={coding} setCoding={setCoding}/>
      { !!coding && 
        <>
          <TechStackView coding={coding}/>
          <ProjectsView />
        </>
      }
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
