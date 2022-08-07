import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import * as createHistory from "history";
import { connect } from "react-redux";

import { actFullLogIn } from "store/actions/authorization/actFullLogIn";
import { actFullReg } from "store/actions/authorization/actFullReg";
import { LogIn } from "pages/LogIn";
import { Reg } from "pages/Reg";
import { Main } from "pages/Main";
import { WorkPage } from "pages/WorkPage";
import ConnectSearch from "pages/Search";
import ConnectedSearchSnippet from "pages/SeachSnippet";
import ConnectedSnippets from "pages/AllSnippets";
import ConnectedSnippet from "pages/MySnippet";

const history = createHistory.createBrowserHistory();

const ConnectLoginForm = connect(null, { onLogin: actFullLogIn })(LogIn);
const ConnectFormReg = connect(null, { Reg: actFullReg })(Reg);

const Routs = ({ token }) => {
	return (
		<div className='App'>
			<Router history={history}>
				{token && (
					<Switch>
						<Redirect from='/login' to='/new-snippet' />
						<Redirect from='/reg' to='/new-snippet' />
						<Route exact path='/new-snippet' component={WorkPage} />
						<Route path='/snippets' component={ConnectedSnippets} />
						<Route path='/search-snippet/:id' component={ConnectedSearchSnippet} />
						<Route path='/snippet/:id' component={ConnectedSnippet} />
						<Route path='/search' component={ConnectSearch} />
					</Switch>
				)}
				{!token && (
					<Switch>
						<Route path='/login' component={ConnectLoginForm} />
						<Route path='/reg' component={ConnectFormReg} />
						<Route path='/' component={Main} />
					</Switch>
				)}
			</Router>
		</div>
	);
};

const ConnectedRouts = connect(state => ({ token: state.auth.token }), null)(Routs);

export default ConnectedRouts;
