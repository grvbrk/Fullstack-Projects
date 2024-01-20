import { memo, useMemo } from "react";

export type optionType = {
  name: string;
  age: number;
  image: string;
  isSelected: boolean;
  id: string;
};

type propsType = {
  option: optionType[];
  optionSelected: (value: string) => void;
};

function Option({ option, optionSelected }: propsType) {

  const notSelectedOptions = useMemo(()=>{
    return option.filter((item)=>(item.isSelected === false))
  }, [option])


  return (
    <div className="options-container">
      {notSelectedOptions.map(({ id, name, age, image }) => (
        <button className="options" key={id} onClick={() => optionSelected(id)}>
          <img src={image} alt="avatar" />
          <p>{name}</p>
          <p>{age}</p>
        </button>
      ))}
    </div>
  );
}

export default memo(Option);
