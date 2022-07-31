import React, {useState} from 'react'

function App() {

  let [counter, setCounter] = useState([0]);

  const  handleCounter = (event) =>{
    setCounter(prevCount => {
      return [parseInt(counter)+1]
    })
  }

  const intializeCounter = event => {
     setCounter(event.target.value);
   };

  return (
    <div className="App">
    <button onClick={handleCounter}>Click count:{counter}</button>
    <br/><br/><br/><br/>
    Add intial Value of Click counter:
    <input onChange={intializeCounter} type='text'></input>
    </div>
  );
}

export default App;
