import React, { useState, useEffect } from 'react'

export default function CustomHooks() {
    const [count, setCount] = useState(0)
    CustomHook(count)
  return (
    <div>
      <p>{count}</p>
      <button value={count} onClick={()=>{setCount(count+1)}}>Click Me</button>
    </div>
  )
}

function CustomHook(count){
    useEffect(()=>{
        if (count >= 1) {
            document.title = `Chats(${count})`
        }
    }, [count])
}
