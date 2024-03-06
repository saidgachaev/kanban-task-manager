import './index.css';
import logo from '../../assets/logo-dark.svg';
const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div>
				<img className='logo' src={logo} alt='' />
				<div className='boards'>
					<span>ALL BOARDS ()</span>
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
