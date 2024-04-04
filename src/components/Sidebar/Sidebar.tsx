import logo from '/assets/logo-dark.svg';
import boardIcon from '/assets/icon-board.svg';
import hideSidebarIcon from '/assets/icon-hide-sidebar.svg';
import showSidebarIcon from '/assets/icon-show-sidebar.svg';
import darkIcon from '/assets/icon-dark-theme.svg';
import lightIcon from '/assets/icon-light-theme.svg';
import { useMst } from '../../hooks/useMst';
import { observer } from 'mobx-react-lite';
import './index.css';
import { FC } from 'react';

interface SidebarProps {
	isSideBarOpen: boolean;
	setIsSideBarOpen: (isOpen:boolean) => void;
}

const Sidebar: FC<SidebarProps> = observer((isSideBarOpen, setIsSideBarOpen ) => {
	const toggleSidebar = () => {
		setIsSideBarOpen((curr: any) => !curr);
	  };
	const {
		boardsStore: { boards, addBoard, getSelectedBoard, selectBoard },
	} = useMst();

	let selectedBoard = getSelectedBoard();

	const handleCreateNewBoard = () => {
		addBoard({ id: Math.random(), title: 'New board', selected: false });
	};

	const handleBoardClick = (id: number) => {
		selectBoard(id);
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
				<div className='theme-toggle'>
					<img src={lightIcon} alt='sun indicating light mode' />
					<label className='switch'>
						<input type='checkbox' />
						<span className='slider round'></span>
					</label>
					<img src={darkIcon} alt='moon indicating dark mode' />
				</div>
				<div
					className={`toggle-sidebar-container  ${!isSideBarOpen && 'toggle-closed'}`}
					onClick={() => toggleSidebar()}
				>
					<img src={isSideBarOpen ? hideSidebarIcon : showSidebarIcon} alt='show/hide sidebar icon' />
					{isSideBarOpen && <p className='heading-M'>Hide Sidebar</p>}
				</div>
			</div>
		</div>
	);
});

export default Sidebar;
