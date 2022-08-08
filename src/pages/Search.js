import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../components/Header";
import { actSearch } from "store/actions/search/actSearch";

import "../styles/Main.css";

const Search = ({ onSearch, snippets }) => {
	const [request, setRequest] = useState("");
	return (
		<>
			<Header />
			<br />
			<div>
				<input value={request} onChange={e => setRequest(e.target.value)} type='search' placeholder='Name or description' aria-label='Search'/>

				<br />

				<div>
					<button onClick={() => onSearch(request)}>
						Search
					</button>
				</div>
			</div>
			<div>
				{snippets?.map(snippet => (
					<div key={snippet._id}>
						<div>
							<p>{`Name: ${snippet.title}` || "Snippet without name"}</p>
							<p>{`Description: ${snippet.description}` || ""}</p>
							<p>{`Owner: ${snippet.owner.login}`}</p>
							<img src={`${process.env.PUBLIC_URL}/img/defaultProject.jpg`} alt='code'></img>
							<div>
								<Link to={"/search-snippet/" + snippet._id}>
									<button>Open snippet</button>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

const ConnectSearch = connect(
	state => ({
		snippets: state?.promise?.searchSnippet?.payload?.data?.SnippetFind,
	}),
	{ onSearch: actSearch },
)(Search);

export default ConnectSearch;
