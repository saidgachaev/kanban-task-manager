import { useState } from 'react';
import logo from '../../../public/assets/logo-dark.svg';
import boardIcon from '../../../public/assets/icon-board.svg';
import { useMst } from '../../hooks/useMst';
import './index.css';

const Sidebar = () => {
	const {
		boardsStore: { boards, addBoard },
	} = useMst();

	const [selectedBoard, setSelectedBoard] = useState<number | null>(null);

	const handleCreateNewBoard = () => {
		addBoard({ id: Math.random(), title: 'New board' });
	};

	const handleBoardClick = (id: number) => {
		setSelectedBoard(id);
	};

	return (
		<div className='sidebar'>
			<div>
				<img className='logo' src={logo} alt='Kanban logo.' />
				<div className='all-boards-title'>ALL BOARDS ({boards.length})</div>
				<div className='sidebar-boards'>
					{boards.map((board) => {
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
						<img src={boardIcon} alt='Board Icon' className='board-icon' />+ Create New Board
					</button>
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
