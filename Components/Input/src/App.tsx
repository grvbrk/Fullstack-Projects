import { useState } from "react";
import Option from "./components/Option";
import Chip from "./components/Chip";
import avatarImage from "/avatar.png";
import { v4 as uuidv4 } from "uuid";

const options = [
  {
    name: "First",
    age: 21,
    image: avatarImage,
    isSelected: false,
    id: uuidv4(),
  },
  {
    name: "Second",
    age: 18,
    image: avatarImage,
    isSelected: false,
    id: uuidv4(),
  },
  {
    name: "Third",
    age: 26,
    image: avatarImage,
    isSelected: false,
    id: uuidv4(),
  },
  {
    name: "Fourth",
    age: 34,
    image: avatarImage,
    isSelected: false,
    id: uuidv4(),
  },
];

function App() {
  const [option, setOption] = useState(options);
  const [showOption, setShowOptions] = useState(false);

  function optionSelected(id: string) {
    const newOption = [...option].map((item)=>(
      item.id === id ? {...item, isSelected : !item.isSelected} : item
    ))
    setOption(newOption)
  }

  function handleClick() {
    setShowOptions(!showOption);
  }

  // function handleBlur() {
  //   setShowOptions(false);
  // }

  return (
    <>
      <div className="container">
        <div className="input-container">
          <Chip optionSelected={optionSelected} option={option}/>
          <input
            onClick={handleClick}
            // onBlur={handleBlur}
            className="input"
            type="text"
            placeholder="Choose"
          />
        </div>
        <div className="render-options">
          {showOption && (
            <Option optionSelected={optionSelected} option={option} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
