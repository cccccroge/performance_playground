import '../stylesheets/App.scss';
import React, { useReducer } from 'react';
import BrowsePanel from './BrowsePanel';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ElementTree from './ElementTree';
import Test1 from './Test1';

export type countState = {
	test1: number;
	test1FieldA: number;
	test1FieldB: number;
	test1FieldC: number;
};

const initialState = {
  test1: 0,
  test1FieldA: 0,
  test1FieldB: 0,
  test1FieldC: 0,
};

const countReducer = (state: countState, action: { type: string }) => {
	switch (action.type) {
		case 'test1':
			return { ...state, test1: state.test1 + 1 };
		case 'test1FieldA':
			return { ...state, test1FieldA: state.test1FieldA + 1 };
		case 'test1FieldB':
			return { ...state, test1FieldB: state.test1FieldB + 1 };
		case 'test1FieldC':
			return { ...state, test1FieldC: state.test1FieldC + 1 };
		default:
			throw new Error();
	}
};

const App = () => {
	const [countState, dispatch] = useReducer(countReducer, initialState);
	return (
		<div className="App">
			<Router>
				<BrowsePanel />
				<div style={{ display: 'flex' }}>
					<div className="page">
						<Switch>
							<Route path="/test1">
								<Test1 dispatch={dispatch} />
							</Route>
							{/* <Route path="/test2">
								<div>YOYO</div>
							</Route> */}
							<Route path="/">
								<div>Home</div>
							</Route>
						</Switch>
					</div>
					<ElementTree counts={countState} />
				</div>
			</Router>
		</div>
	);
};

export default App;
