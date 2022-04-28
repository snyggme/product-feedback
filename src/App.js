import { useEffect, useState} from 'react';
import Modal from './components/Modal';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductsContainer from "./containers/ProductsContainer";
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

function App({ isSigned }) {
	const [ modal, setModal ] = useState({
		show: false,
		type: 'login'
	});

	useEffect(() => {
		if (isSigned)
			setModal({
				...modal,
				show: false,
			})
	}, [isSigned])

	const handleClick = (type) => () => {
		setModal({
			show: !modal.show,
			type
		});
	}

  	return (
		<div>
			<Navbar onClick={handleClick} isSigned={isSigned} />
			{ modal.show && <Modal type={modal.type} setModal={setModal}/> }
			<Routes>
				<Route path='/' element={<Home setModal={setModal}/>} />
				<Route path='/products/*' element={<ProductsContainer />} />
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

const mapStateToProps = store => {
    return {
        isSigned: store.auth.isSigned
    }
}

export default connect(
    mapStateToProps,
    null
)(App);

