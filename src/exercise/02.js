// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import React from 'react'

function Greeting({initialName = ''}) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') || initialName
  

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)

  //!! TODO REFACTOR THIS AS PER VIDEO
  

  // function syncLocalStorageState(initialName){
  //   const [name, setName] = React.useState(() => {
  //     return window.localStorage.getItem('name') || initialName ;
  //   }) 

  //   React.useEffect(() => {
  //     setName(window.localStorage.getItem('name') || initialName );
  //   },[initialName])
    
  //   return [name,setName];
  // }
  
  function useLocalStorageState(key,value = ""){
    if(!key){
      throw new Error('Need a key');
    }
    const [state,setState] = React.useState(() => window.localStorage.getItem(key) || value);
    
    React.useEffect(() => {
      // setName(window.localStorage.getItem(key) || value );
      console.log('fx')
      window.localStorage.setItem(key,state);
    },[key, state]);

    return [state,setState]
  }
  
  const [name,setName] = useLocalStorageState('name',initialName);

  // console.log(name,initialName);
  function clearState(){
    if(window.localStorage.getItem('name') === ''){
      setName('');
    }
    else{
      setName('');
      window.localStorage.removeItem('name');
    }
  }
  function handleChange(event) {
    // const name = event.target.value;
    setName(event.target.value);
    // window.localStorage.setItem('name',name);
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
      <br/>
      {name && <button onClick={clearState}>Clear</button>}
    </div>
  )
}

function App() {
  return <Greeting initialName="Gobwobbler" />
}

export default App
