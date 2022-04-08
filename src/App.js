import { useState} from 'react';
import Modal from './components/Modal';
import Navbar from "./components/Navbar";
import Home from "./components/Home";

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
			<Home />
			{ modal.show && <Modal type={modal.type} setModal={setModal}/> }
		</div>
  	);
}

export default App;
