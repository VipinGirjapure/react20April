import React from "react";
import ChildThree from "./childThree";
import ChildFour from "./childFour";

const ChildTwo = ({name}) => {
    return (
    <div>
        <ChildFour/>
        <h1><ChildThree name={name}/></h1>
    </div>
        )
};

export default ChildTwo;