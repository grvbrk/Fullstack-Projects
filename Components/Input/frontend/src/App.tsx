import { useCallback, useEffect, useState } from "react";
import Option from "./components/Option";
import Chip from "./components/Chip";
import avatarImage from "/avatar.png";
import { v4 as uuidv4 } from "uuid";

const OPTIONS = [
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
  const [option, setOption] = useState(OPTIONS);
  const [showOptions, setShowOptions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [optionCount, setOptionCount] = useState(OPTIONS.length);

  useEffect(() => {
    const options = option.filter((item) => item.isSelected === false);
    setOptionCount(options.length);
  }, [option]);

  function optionSelected(id: string) {
    const newOption = [...option].map((item) =>
      item.id === id ? { ...item, isSelected: !item.isSelected } : item
    );
    setOption(newOption);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setShowOptions(true);
    const newOption = [...OPTIONS].filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setOption(newOption);
  }

  const handleKeyPress = useCallback(
    function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
      if (e.code === "Enter") {
        if (!showOptions) setShowOptions(true);
        if (showOptions) {
          const options = option.filter((item) => item.isSelected === false);
          const selectedOptionId = options[highlightedIndex].id;
          optionSelected(selectedOptionId);
        }
      }
      if (e.code === "ArrowDown") {
        const newIndex = highlightedIndex + 1;
        if (newIndex >= 0 && newIndex < optionCount) {
          setHighlightedIndex(newIndex);
        }
      }
      if (e.code === "ArrowUp") {
        const newIndex = highlightedIndex - 1;
        if (newIndex >= 0 && newIndex < optionCount) {
          setHighlightedIndex(newIndex);
        }
      }
    },
    [optionCount, highlightedIndex]
  );

  return (
    <>
      <div className="container">
        <div className="input-container">
          <Chip optionSelected={optionSelected} option={option} />
          <input
            onClick={() => {
              setHighlightedIndex(0);
              setShowOptions(!showOptions);
            }}
            onBlur={() => setShowOptions(false)}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            className="input"
            type="text"
            placeholder="Choose"
          />
        </div>
        <div className="render-options">
          {showOptions && (
            <Option
              optionSelected={optionSelected}
              option={option}
              highlight={highlightedIndex}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
