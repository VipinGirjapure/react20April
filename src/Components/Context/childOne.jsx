import React from "react";
import ChildTwo from "./childTwo";


const ChildOne = ({name}) => {
    
    return <h1><ChildTwo name={name}/></h1>
};

export default ChildOne;