// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import React from 'react'

function Greeting({initialName}) {
  // 💣 delete this variable declaration and replace it with a React.useState call
  // const name = ''
  const [name,setName] = React.useState(initialName || '');
  
  const inputRef = React.useRef(null);

  function handleChange(event) {
    // 🐨 update the name here based on event.target.value
    setName(inputRef.current.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input ref={inputRef} onChange={handleChange} id="name" value={name} />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Chocola" />
}

export default App
