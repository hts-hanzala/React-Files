import React, { useState } from 'react'
import './Pract.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'



export default function Pract() {
  const [count, setCount] = useState(1);
    let a = 'car'
    const red = {"background-color":"red"}

  const updateCount = () => {
    setCount(count + 1)
  }
    
  return (
    <div>
      <h1>This is for practice</h1>
      {/* <p>{console.log('hello from pract')}</p>
      <p>{console.log(a)}</p> */}
      {/* <p style={red}>Changing CSS</p> */}
      <p>Changing CSS</p>
      <p className="samp">This is for demo</p>
      <button type="button" className="btn btn-primary">
        Click Me!
      </button>
      <Button variant="warning">Warning</Button>
      <h1>Functional Component Counter</h1>
      <h3 className="mx-3">{count}</h3>
      <Button variant="primary" className='mx-3' onClick={updateCount}>Update Count</Button>
    </div>
  );
}
