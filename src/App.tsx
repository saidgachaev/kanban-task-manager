import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Board from './components/Board/Board';
import { observer } from 'mobx-react-lite';
import { useMst } from './hooks/useMst';
import './App.css';


const App = observer( () => {
	const {
		boardsStore: { getSelectedBoard},
	} = useMst();

	const selectedBoard = getSelectedBoard()
	return (
		<div className='app'>
			<Sidebar />
			<div className='container'>
				<Header title={selectedBoard?.title}/>
				<Board />
			</div>
		</div>
	);
})

export default App;
