import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import Header from './components/Header/Header';
import Board from './components/Board/Board';

function App() {
	return (
		<div className='app'>
			<Sidebar />
			<div className='container'>
				<Header />
				<Board />
			</div>
		</div>
	);
}

export default App;
