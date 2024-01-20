type optionType = {
  name: string;
  age: number;
};

type propsType = {
  option: optionType[];
};

function Option({ option }: propsType) {
  console.log(option);
  return (
    <div>
      {option.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
          <h1>{item.age}</h1>
        </div>
      ))}
    </div>
  );
}

export default Option;
