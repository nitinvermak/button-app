import React, {useState} from 'react'

function App() {

  let [counter, setCounter] = useState([0]);

  const  increaseCounter = () =>{
    setCounter(prevCount => {
      return [parseInt(counter)+1]
    })
  }

  const  decreaseCounter = () =>{
    setCounter(prevCount => {
      return [parseInt(counter)-1]
    })
  }
  const intializeCounter = (e) => {
     setCounter(e.target.value);
   };


  return (
    <div className="App">
    <button onClick={increaseCounter}>Increase counter</button>
    <br/>
    <button onClick={decreaseCounter}>Decrease counter </button>

    <pre> Current Counter: <b>{counter}</b></pre>
    <br/><br/><br/><br/>
    Add intial Value of Click counter:
    <input onChange={intializeCounter} type='text'></input>
    </div>
  );
}

export default App;
