import logo from '../../../public/assets/logo-dark.svg';
import boardIcon from '../../../public/assets/icon-board.svg';
import { useMst } from '../../hooks/useMst';
import { observer } from 'mobx-react-lite';
import './index.css';

const Sidebar = observer(() => {
	const {
		boardsStore: { boards, addBoard, getSelectedBoard, selectBoard },
	} = useMst();

	let selectedBoard = getSelectedBoard()

	const handleCreateNewBoard = () => {
		addBoard({ id: Math.random(), title: 'New board' , selected: false});
	};

	const handleBoardClick = (id: number) => {
		selectBoard(id)
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
								className={`sidebar-board ${selectedBoard?.id === board.id ? 'selected' : ''}`}
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
});

export default Sidebar;
