import { connect } from "react-redux";

import Header from "components/Header";
import { Snippet } from "components/Snippet";
import { actAddSnippet } from "store/actions/add/actAddSnippet";

export const WorkPage = () => {
	return (
		<>
			<Header />
			<ConnectEditorsPage />
		</>
	);
};

const ConnectEditorsPage = connect(null, { onSave: actAddSnippet })(Snippet);
export default ConnectEditorsPage;
