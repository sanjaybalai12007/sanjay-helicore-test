import { useState } from "react";
import ComponentB from "./ComponentB";

function ComponentA() {
    const [ passedActualValue, setPassedActualValue ] = useState('');

  return (
    <div className="ComponentA">
        <h1>Component A</h1>
        <div> Passing Value from child component is here: <span>{passedActualValue}</span></div>
        <ComponentB getValueFromChild={(val) => {
            setPassedActualValue(val)
        }}/>
    </div>
  );
}

export default ComponentA;
