import React from "react";

const JuiceList = (props) => {
  console.log(props);
  const renderJuice = (juice) =>
    juice ? juice.map((item, id) => <div key={id}>{item.name}</div>) : null;
  return (
    <div>
      <h1>{renderJuice(props.data1.juice)}</h1>
    </div>
  );
};

export default JuiceList;
