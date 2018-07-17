import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import {install} from 'redux-loop';
import rootReducer from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export function configureStore(browserHistory) {
	const store = createStore(
		rootReducer,
		{},
		composeEnhancers(
			applyMiddleware(routerMiddleware(browserHistory)),
			install()
		)
	)

	return store
}

