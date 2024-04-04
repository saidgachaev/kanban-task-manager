import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Board from './components/Board/Board';
import { observer } from 'mobx-react-lite';
import { useMst } from './hooks/useMst';
import { useState } from 'react';
import './App.css';


const App = observer( () => {
	const [isSideBarOpen, setIsSideBarOpen] = useState(true);
	const {
		boardsStore: { getSelectedBoard},
	} = useMst();

	const selectedBoard = getSelectedBoard()
	return (
		<div className='app'>
			<Sidebar isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}/>
			<div className='container'>
				<Header title={selectedBoard?.title}/>
				<Board />
			</div>
		</div>
	);
})

export default App;
