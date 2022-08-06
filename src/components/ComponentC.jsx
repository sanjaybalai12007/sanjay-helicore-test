import { useEffect, useState } from "react";

function ComponentC(props) {
    const { isBtnClicked, getherInputValue } = props;
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if(isBtnClicked){
            getherInputValue(inputValue);
        }
    },[isBtnClicked])

  return (
    <div className="ComponentC">
        <h1>Component C</h1>
        <label>Random Text:</label>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        
    </div>
  );
}

export default ComponentC;
