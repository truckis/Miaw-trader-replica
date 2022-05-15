import './ListItem.css'



const Listitem = (props) => {

    const colors = ['rgb(204, 153, 201)', 'rgb(57, 57, 134)', 'rgb(80, 122, 208)', 'rgb(158, 224, 158)', 'rgb(255, 212, 0)', 'rgb(254, 177, 68)', 'rgb(255, 102, 99)']
    const fontSize = ['18px', '20px', '22px', '24px', '26px', '28px', '30px']
    
    return (
        <>
        <div className='item-container'>
            <label>{props.name}</label>
            <h1 style={{
                color: `${colors[(Math.floor(props.amount/5))]}`,
                fontSize: `${fontSize[(Math.floor(props.amount/5))]}`
                }}>{props.message}</h1>
            <p>{`Burned ${props.amount} Miaw!`}</p>
        </div>
        </>
    )
}

export default Listitem;