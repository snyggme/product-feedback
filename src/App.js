import { useState} from 'react';
import Modal from './components/Modal';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Feedbacks from "./components/Feedbacks";
import Comments from "./components/Comments";
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
			{ modal.show && <Modal type={modal.type} setModal={setModal}/> }
			<Routes>
				<Route path='/' element={<Home setModal={setModal}/>} />
				<Route path='/products' element={<Products />} />
				<Route path='/products/:productId' element={<Feedbacks />} />
				<Route path='/products/:productId/comments/:commentsId' element={<Comments />} />
				<Route
					path="*"
					element={
						<main style={{ padding: "1rem" }}>
						<p>There's nothing here!</p>
						</main>
					}
				/>
			</Routes>
		</div>
  	);
}

export default App;
