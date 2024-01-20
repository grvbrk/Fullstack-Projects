type optionType = {
  name: string;
  age: number;
  image: string;
};

type propsType = {
  option: optionType[];
};

function Option({ option }: propsType) {
  return (
    <div className="options-container">
      {option.map(({name, age, image}, index) => (
        <button className="options" key={index}>
          <img src={image} alt="avatar" />
          <p>{name}</p>
          <p>{age}</p>
        </button>
      ))}
    </div>
  );
}

export default Option;
