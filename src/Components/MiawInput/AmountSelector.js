import './AmountSelector.css'

const AmountSelector = (props) => {

const dropdownChangeHandler = (event) => {
    console.log(event.target.value)
    props.onSelectedAmount(event.target.value)
}
    return (
        <>
         <select value={props.selected} onChange={dropdownChangeHandler} className='select-container'>
          <option value='1'>1 MIAW</option>
          <option value='5'>5 MIAW</option>
          <option value='10'>10 MIAW</option>
          <option value='15'>15 MIAW</option>
          <option value='20'>20 MIAW</option>
          <option value='25'>25 MIAW</option>
          <option value='30'>30 MIAW</option>
        </select>
        </>
    )
}

export default AmountSelector;