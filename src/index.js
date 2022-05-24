import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './store';
import './styles/index.scss';

const container = document.getElementById('root');
const root = createRoot(container);

const Root = ({ store }) => (
	<Provider store={store}>
    	<Router basename={process.env.PUBLIC_URL}>
			<App />
		</Router>
  	</Provider>
)

root.render(
	<React.StrictMode>
  		<Root store={store} />
  	</React.StrictMode>
);
