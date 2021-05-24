import { useState } from "react";

const HelloWorld = (props) => <div>Hello {props.name}</div>;

const App = () => {
  const [name, setName] = useState("Palm .w");

  return (
    <div>
      <HelloWorld name={name} />
    </div>
  );
};

export default App;
