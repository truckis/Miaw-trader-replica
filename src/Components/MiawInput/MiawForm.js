import React, { useRef, useState } from 'react';
import './MiawForm.css'
import AmountSelector from './AmountSelector';


const MiawForm = (props) => {

    const miawNameRef = useRef();
    const miawMessageRef = useRef();
    const [selectedAmount, setSelectedAmount] = useState('')

    const submitFormHandler = (event) => {
        event.preventDefault();

        const miawUserInput = {
            name: miawNameRef.current.value,
            message: miawMessageRef.current.value,
            amount: selectedAmount,
            id: Math.floor(Math.random()*1000),
        }
        props.onGetMiawInput(miawUserInput)
        miawNameRef.current.value = "";
        miawMessageRef.current.value = "";
    }

    // Sets the selected Amount variable to the selected value in AmountSelector.js
    const selectedAmountHandler = (selectedValue) => {
        console.log(selectedValue)
        setSelectedAmount(selectedValue);
    }

    return (
        <>
            <form onSubmit={submitFormHandler} className='miaw-form'>
                <div>
                    <input type="text" ref={miawNameRef} placeholder='1 MIAW for init name'/>
                    <button type="submit" onClick={submitFormHandler}>Connect Wallet</button>
                </div>
                <div>
                    <AmountSelector onSelectedAmount={selectedAmountHandler} selected={selectedAmount}/>
                </div>
                <div>
                    <input type="text" ref={miawMessageRef} placeholder='1. Input text. 2.Click Miawing!🐱 '/>
                    <button type="submit" onClick={submitFormHandler}>Connect Wallet</button>
                </div>
            </form>
        </>
    )
}


export default MiawForm;