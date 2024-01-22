import { optionType } from "./Option";
import { useMemo, memo } from "react";

type propsType = {
  option: optionType[];
  optionSelected: (value: string) => void;
};
function Chip({ option, optionSelected }: propsType) {
  const selectedOptions = useMemo(() => {
    return option.filter((item) => item.isSelected === true);
  }, [option]);

  return (
    <>
      {selectedOptions.map(({ id, image }) => {
        return (
          <div key={id} className="chip-container">
            <img src={image} alt="Avatar" />
            <button onClick={() => optionSelected(id)}>X</button>
          </div>
        );
      })}
    </>
  );
}

export default memo(Chip);
