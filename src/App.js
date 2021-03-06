import { useEffect, useState} from 'react';
import Modal from './components/Modal/Modal';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ProductsContainer from "./containers/ProductsContainer";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './actions/AuthAction';
import Profile from './components/Profile/Profile';

function App({ isSigned, logout }) {
	const [ modal, setModal ] = useState({
		show: false,
		type: 'login'
	});

	let navigate = useNavigate();

	useEffect(() => {
		if (isSigned) {
			setModal({ ...modal, show: false, });
			navigate('/products')
		}
	}, [isSigned])

	const handleClick = (type) => () => {
		if (type === 'logout') {
			logout();
			navigate('/');
		} else {
			setModal({ show: !modal.show, type });
		}
	}

	const handleHomeButton = () => {
		if (isSigned) 
			navigate('/products')
		else 
			setModal({ show: true, type: 'login'})
	}

  	return (
		<div>
			<Navbar handleClick={handleClick} isSigned={isSigned} />
			{ modal.show && <Modal type={modal.type} setModal={setModal}/> }
			<Routes>
				<Route path='/' element={<Home handleHomeButton={handleHomeButton}/>} />
				{ isSigned && <Route path='/products/*' element={<ProductsContainer />} />}
				{ isSigned && <Route path='/profile' element={<Profile />} />}
				<Route path="*"
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

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

