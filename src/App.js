import { useState} from 'react';
import Modal from './components/Modal';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import { Routes, Route } from 'react-router-dom';

function App() {
	const [ modal, setModal ] = useState({
		show: false,
		type: 'login'
	});

	const handleClick = (type) => () => {
		setModal({
			show: !modal.show,
			type
		});
	}

  	return (
		<div>
			<Navbar onClick={handleClick}/>
			<Routes>
				<Route path='/' element={<Home setModal={setModal}/>} />
				<Route path='/feedbacks' element={<Products />} />
			</Routes>
			{ modal.show && <Modal type={modal.type} setModal={setModal}/> }
		</div>
  	);
}

export default App;
