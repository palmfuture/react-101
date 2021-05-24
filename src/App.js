const HelloWorld = (props) => <div>Hello {props.name}</div>;

const App = () => {
  return (
    <div>
      <HelloWorld name="Palm w." />
    </div>
  );
};

export default App;
