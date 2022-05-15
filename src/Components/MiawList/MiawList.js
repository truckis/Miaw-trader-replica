import './MiawList.css'
import Listitem from './ListItem'

const MiawList = (props) => {
    return (
        <>
            <div className='list-container'>
                <ul>
                    {props.items.map((item) => (
                        <Listitem 
                        key={item.id}
                        name={item.name}
                        amount={item.amount}
                        message={item.message}
                    />
                    ))}
                </ul>
            </div>
        </>
    )
}

export default MiawList;


