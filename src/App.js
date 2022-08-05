import React from "react";
import { Provider } from "react-redux";

import ConnectedRouts from "components/Routers";
import store from "store/reducers";

import "./App.css";

function App() {
	return (
		<>
			<Provider store={store}>
				<ConnectedRouts />
			</Provider>
		</>
	);
}

export default App;
