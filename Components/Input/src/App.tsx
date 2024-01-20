import Option from "./components/Option";

const options = [
  { name: "First", age: 24 },
  { name: "Second", age: 24 },
  { name: "Third", age: 24 },
  { name: "Fourth", age: 24 },
  { name: "Fifth", age: 24 },
];

function App() {
  return (
    <>
      <div className="container">
        <div className="input-container">
          {/* {<Chip />} */}
          <input className="input" type="text" placeholder="Choose" />
        </div>
        <div className="render-options">
          <Option option={options}/>
        </div>
      </div>
    </>
  );
}

export default App;
