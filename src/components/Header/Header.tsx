import { FC } from 'react';
// import elipsis from "../assets/icon-vertical-ellipsis.svg";
import elipsis from "../../../public/assets/icon-vertical-ellipsis.svg";
import './index.css';

interface HeaderProps {
	title: string | undefined;
}
const Header: FC<HeaderProps> = ({ title}) => {
	return (
		<div className='header'>
			<div>{title}</div>
			<div className='header-button-container'>
			<button>+ Add New Task</button>
			<img className='elipsis' src={elipsis} alt="" />
			</div>
			
		</div>
	);
};

export default Header;
