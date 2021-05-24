import { useState } from "react";

const HelloWorld = (props) => <div>Hello {props.name}</div>;

const App = () => {
  const [name, setName] = useState("Palm .w");

  const handleClick = () => {
    setName("Meow Meow");
  };

  return (
    <div>
      <HelloWorld name={name} />
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default App;
