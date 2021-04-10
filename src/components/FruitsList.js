import React from "react";

const FruitsList = (props) => {
  console.log(props);
  const renderFruits = (fruits) =>
    fruits ? fruits.map((item, id) => <div key={id}>{item.name}</div>) : null;
  return (
    <div>
      <h1>{renderFruits(props.data.fruits)}</h1>
    </div>
  );
};

export default FruitsList;
