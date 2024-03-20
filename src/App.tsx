import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Board from './components/Board/Board';
import './App.css';

function App() {
	return (
		<div className='app'>
			<Sidebar />
			<div className='container'>
				<Header title='title haha'/>
				<Board />
			</div>
		</div>
	);
}

export default App;
