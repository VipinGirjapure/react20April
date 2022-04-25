import React, { useContext } from "react";
import { Institute, MyCounter, MyName } from "../../App";

const ChildFour = () => {
  const name = useContext(MyName);
  const inst = useContext(Institute);
  const counterData = useContext(MyCounter);
  const { counter, handleChange } = counterData;
  return (
    <div>
      <h1>
        Child Four with {name} -{inst} - Counter : {counter}{" "}
      </h1>
      <button onClick={handleChange}>Click Me</button>
    </div>
  );
};
export default ChildFour;
