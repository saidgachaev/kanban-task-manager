import { FC } from 'react';
import './index.css';

interface HeaderProps {
	title: string;
}
const Header: FC<HeaderProps> = ({ title }) => {
	return (
		<div className='header'>
			<div>{title}</div>
			<button>+ Add New Task</button>
		</div>
	);
};

export default Header;
