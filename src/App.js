import React from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  console.log(data);

  return (
    <main>
      <div className="container">
        <h3>Questions and about</h3>
        <section className="info">
          {data.map((li) => (
            <SingleQuestion
              key={li.id}
              title={li.title}
              info={li.info}
            ></SingleQuestion>
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
