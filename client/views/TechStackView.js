import React, { useState, useEffect } from "react";

export default (props) => {
  const [techStack, setTechStack] = useState([]);

  useEffect(() => {
    async function getTechStack() {
      const res = await fetch("/data/tech-stack.json");
      const data = await res.json();
      setTechStack(data);
    }
    getTechStack();
  }, []);

  return (
    <div id="tech-stack">
      {techStack.length
        ? techStack.map((tech) => (
            <div class="tech-stack-item">
              <p>{tech.iconPath}</p>
              <p>{tech.name}</p>
              <p>{tech.description}</p>
              <p>{tech.docLink}</p>
            </div>
          ))
        : null}
    </div>
  );
};
