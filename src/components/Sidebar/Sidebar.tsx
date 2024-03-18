import { useState } from 'react';
import logo from '../../../public/assets/logo-dark.svg';
import boardIcon from '../../../public/assets/icon-board.svg';
import './index.css';

interface Board {
	id: number;
	title: string;
}

const Sidebar = () => {
	const [boardsList, setBoardsList] = useState<Board[]>([]);
	const [selectedBoard, setSelectedBoard] = useState<number | null>(null);

	const handleCreateNewBoard = () => {
		const newBoard = {
			id: Math.random(),
			title: 'new board',
		};
		setBoardsList((prevBoardsList) => [...prevBoardsList, newBoard]);
	};

	const handleBoardClick = (id: number) => {
		setSelectedBoard(id);
	};

	return (
		<div className='sidebar'>
			<div>
				<img className='logo' src={logo} alt='Kanban logo.' />
				<div className='all-boards-title'>ALL BOARDS ({boardsList.length})</div>
				<div className='sidebar-boards'>
					{boardsList.map((board) => {
						return (
							<div
								key={board.id}
								className={`sidebar-board ${selectedBoard === board.id ? 'selected' : ''}`}
								onClick={() => handleBoardClick(board.id)}
							>
								<img src={boardIcon} alt='Board Icon' className='board-icon' />
								<span>{board.title}</span>
							</div>
						);
					})}
					<button className='create-new-board-button' onClick={handleCreateNewBoard}>
					<img src={boardIcon} alt='Board Icon' className='board-icon' />
						+ Create New Board</button>
				</div>
				
			</div>

			<div>
				<div>Light/Dark mode</div>
				<button className='hide-sidebar-button'>Hide Sidebar</button>
			</div>
		</div>
	);
};

export default Sidebar;
