import React from 'react'
import './Pract.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

export default function Pract() {
    let a = 'car'
    const red = {"background-color":"red"}
    // const [count, setCount] = useState(1);
  return (
    <div>
      <h1>This is for practice</h1>
      {/* <p>{console.log('hello from pract')}</p>
      <p>{console.log(a)}</p> */}
    {/* <p style={red}>Changing CSS</p> */}
    <p>Changing CSS</p>
    <p className='samp'>This is for demo</p>
    <button type='button' className='btn btn-primary'>Click Me!</button>
    <Button variant='warning'>Warning</Button>
    </div>
  )
}
