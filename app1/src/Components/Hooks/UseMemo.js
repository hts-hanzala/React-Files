import React, { useMemo, useState } from "react";

function UseMemo() {
  const [number, setNumber] = useState(0);

  const square = useMemo(()=>{
    console.log('Calculating square...')
    return number * number
  }, [number])
  
  return (
    <div>
      <h2>useMemo Hook</h2>
      <h3>Square Calculator</h3>
      <label htmlFor="">
        Enter a Number : 
        <input type="number" value={number} onChange={(e)=>setNumber(parseInt(e.target.value))}/>
      </label>
      <p>Square : {square}</p>
    </div>
  );
}

export default UseMemo;
