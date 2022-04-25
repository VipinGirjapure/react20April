import React, { createContext, useState } from "react";
import ChildOne from "./Components/Context/childOne";
import "../src/App.css"
export const MyName = createContext();
export const Institute = createContext();
export const MyCounter = createContext();

function App() {
  // const myData ={
  //   fname : "Vipin",
  //   lname : "Girjapure"
  // }
  const [counter,setCounter] = useState(0);
  const obj ={
    counter,
    handleChange : () => setCounter(counter + 1)
  }
  return (
    <div>
      {/* <MyName.Provider value={myData}> */}
     <h3> App-Counter : {counter}</h3>

      <MyName.Provider value={"Vipin"}>
        <Institute.Provider value={"PrepBytes"}>
          <MyCounter.Provider value={obj}> 
            <ChildOne />
          </MyCounter.Provider>
        </Institute.Provider>
      </MyName.Provider>
    </div>
  );
}

export default App;
// export {MyName};
