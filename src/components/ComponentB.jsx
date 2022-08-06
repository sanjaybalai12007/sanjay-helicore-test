import { useEffect, useState } from "react";
import ComponentC from "./ComponentC";

function ComponentB(props) {
    const { getValueFromChild } = props;
    const [ passInputValue, setPassInputValue ] = useState('');
    const [ isBtnClicked, setIsBtnClicked ] = useState(false);

    useEffect(() => {
        getValueFromChild(passInputValue);
    },[passInputValue])

  return (
    <div className="ComponentB">
        <h1>Component B</h1>
        <button type="submit" onClick={(e) => {
            setIsBtnClicked(true);
        }}>Click</button>
        <ComponentC isBtnClicked={isBtnClicked} getherInputValue={(val) => {
            setPassInputValue(val);
            setIsBtnClicked(false);
        }}/>
    </div>
  );
}

export default ComponentB;
