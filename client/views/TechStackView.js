import React, { useState, useEffect, useRef } from "react";
import {TechIcon} from '../components';

export default (props) => {
  const [techStack, setTechStack] = useState([]);
  const techStackRef = useRef();

  useEffect(() => {
    getTechStack();
    scrollToTechStack();
  }, []);

  async function getTechStack() {
    const res = await fetch("/data/tech-stack.json");
    const data = await res.json();
    setTechStack(data);
  }

  function scrollToTechStack(){
      techStackRef.current.scrollIntoView({behavior: "smooth"})
  }

  return (
    <section id="tech-stack-view" ref={techStackRef}>
      <h1>Tech Stack <br/> (on Stacks on Stacks)</h1>
      <div id='tech-stack'>
        {
          techStack.length
          ? techStack.map((tech) => (<TechIcon {...tech} />))
          : null
        }
      </div>
    </section>
  );
};
