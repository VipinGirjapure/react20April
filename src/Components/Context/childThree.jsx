import React from "react";
import { Institute, MyName } from "../../App";


const ChildThree = () => {
    return <MyName.Consumer>
        {(name) => {
                return (
                    <Institute.Consumer>
                        {(inst) => {
                                return(<h3>My name is {name}-{inst}</h3>)
                            }}
                     </Institute.Consumer>);
            }
        }
        </MyName.Consumer>
    };
            // (obj) => {
            //     const {fname ,lname} =obj;
            //     return( <h5>My name is {fname} {lname}</h5>)
            // }

export default ChildThree;