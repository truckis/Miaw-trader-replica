import './BoardItem.css'

const BoardItem = (props) => {
    return (
        <>
            <div className='board-item-container'>
                <div>{props.id}</div>
                <h5>{props.message}</h5>
                <h5>{props.amount}</h5>
            </div>
        </>
    )
}

export default BoardItem;