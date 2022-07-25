import { useState } from "react";
import "./App.css";
import Header from "./header/Header";
import Hello from "./hello/Hello";
import CurrentTime from "./utils/CurrentTime";
import Text from "./utils/Text";
import World from "./world/World";
function App() {
  const [items, setItems] = useState([
    { id: 1, text: "Hello world" },
    { id: 2, text: "Hello_World" },
    { id: 3, text: "hello world" },
  ]);

  const handleClick = () => {
    setItems(items.concat({ id: items.length + 1, text: "Hello World" }));
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Click me to add more Hello World</button>
      <Header text="Hello world!" />
      <p>
        Hello world <CurrentTime />
      </p>

      <Text>
        Hello world <CurrentTime />
      </Text>

      {items.map((item) => (
        <h4 className={`header${item.id}`} key={item.id}>
          {item.text} <CurrentTime />
        </h4>
      ))}

      <h3>
        <Hello /> <World /> <CurrentTime />
      </h3>

      <h2>
        Hello world <CurrentTime />
      </h2>

      <div
        className="helloWorldSection"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Hello</Text>
        <Text>World</Text>
        <CurrentTime />
      </div>

      <footer>
        <p>
          Hello world <CurrentTime />
        </p>
      </footer>
    </div>
  );
}

export default App;
