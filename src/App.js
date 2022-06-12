import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import MiawForm from './Components/MiawInput/MiawForm';
import Banner from './Components/Banner/Banner';
import MiawList from './Components/MiawList/MiawList';
import Board from './Components/MiawBoard/Board';




function App() {

  const [miawUserInput, setMiawUserInput] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  async function addUserInput(inputs) {
    console.log(inputs);
    const response = await fetch('https://react-http-2c9d9-default-rtdb.firebaseio.com/message.json', {
      method: 'POST',
      body: JSON.stringify(inputs),
      headers: {
        'Content-Type': 'applicatio/json'
      }
    });
    const data = await response.json()
    console.log(data)
    console.log(process.env.BASE_URL)
    fetchListHandler()
  }

  async function fetchListHandler() {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('https://react-http-2c9d9-default-rtdb.firebaseio.com/message.json');
      if(!response.ok) {
        throw new Error('Something went wrong')
      }
      const data = await response.json()

        const loadedList = [];
        for (const key in data) {
          loadedList.push({
            id: key,
            name: data[key].name,
            message: data[key].message,
            amount:data[key].amount
          })
        }
        setMiawUserInput(loadedList.reverse())
        
      } catch (error) {
        setError(error.message)
      }
      setIsLoading(false)
    }

     // Fetches the data on component load
  useEffect(() => {
    fetchListHandler()
  }, [])

  return (
     <>
     <Header />
     <div className='component-container'>
      <div className='left-container'>
        <Board />
      </div>
      <div className='right-container'>
        <Banner miawname={miawName}/>
        <MiawForm onGetMiawInput={addUserInput}/>
        <MiawList items={miawUserInput}/>
      </div>
     </div>
       
    </>
  );
}

export default App;
