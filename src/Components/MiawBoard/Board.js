import './Board.css'
import BoardItem from './BoardItem';
import board_data from './BoardData';

const Board = () => {
    return (
        <>
        <h2>Miawer board</h2>
        <ul>
            {board_data.map((item) => (
                <BoardItem
                    key={item.id}
                    id={item.id}
                    message={item.message}
                    amount={item.amount}
                />
            ))}
        </ul>
        </>
    )
}

export default Board;