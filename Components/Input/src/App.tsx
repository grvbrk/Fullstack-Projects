import { useState } from "react";
import Option from "./components/Option";
import Chip from "./components/Chip";
import avatarImage from "/avatar.png"

const options = [
  { name: "First", age: 24, image: avatarImage },
  { name: "Second", age: 24, image: avatarImage },
  { name: "Third", age: 24, image: avatarImage },
  { name: "Fourth", age: 24, image: avatarImage },
  { name: "Fifth", age: 24, image: avatarImage },
];

function App() {
  const [showOption, setShowOptions] = useState(false);

  function handleClick() {
    setShowOptions(!showOption);
  }

  function handleBlur() {
    setShowOptions(false);
  }

  return (
    <>
      <div className="container">
        <div className="input-container">
        {/* <Chip /> */}
          <input
            onClick={handleClick}
            onBlur={handleBlur}
            className="input"
            type="text"
            placeholder="Choose"
          />

        </div>
        <div className="render-options">
          {showOption && <Option option={options} />}
        </div>
      </div>
    </>
  );
}

export default App;
