import './index.css';
const Board = () => {
	return (
		<div className='board'>
			<div className='title'>This board is empty. Create a new column to get started.</div>
			<button className='add-column-button'>+ Add New Column</button>
		</div>
	);
};

export default Board;
