import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import MiawForm from './Components/MiawInput/MiawForm';
import Banner from './Components/Banner/Banner';
import MiawList from './Components/MiawList/MiawList';
import Board from './Components/MiawBoard/Board';

const dummy_content = [
  {
    name: "OldMcMiawer",
    message: "Miaw Miaw Miaw Miaw Miaaaawwww",
    amount: "30",
    id: 1234
  },
  {
    name: "JackSparrow",
    message: "mush love miaw gang! I'll see you at the bottom!",
    amount: "15",
    id: 5490
  },
  {
    name: "Thirst4Miaw",
    message: "Say Miaw one more time",
    amount: "10",
    id: 222
  }
]


function App() {

  const [miawUserInput, setMiawUserInput] = useState(dummy_content)
  const [miawName, setMiawName] = useState('')

  const addMiawInput = (enteredInput) => {
    setMiawUserInput(prevMiawUserInput => {
      return [enteredInput, ...prevMiawUserInput]
    })
    setMiawName(enteredInput.name)
    console.log(miawUserInput)
  }

  return (
     <>
     <Header />
     <div className='component-container'>
      <div className='left-container'>
        <Board />
      </div>
      <div className='right-container'>
        <Banner miawname={miawName}/>
        <MiawForm onGetMiawInput={addMiawInput}/>
        <MiawList items={miawUserInput}/>
      </div>
     </div>
       
    </>
  );
}

export default App;
