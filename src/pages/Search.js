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
				<input value={request} onChange={e => setRequest(e.target.value)} type='search' placeholder='Name or description' aria-label='Search' />

				<br />

				<div>
					<button class="btn btn-outline-secondary px-4" onClick={() => onSearch(request)}>
						Search
					</button>
				</div>
			</div>
			<div>
				{snippets?.map(snippet => (
					<div key={snippet._id}>
						<div class="card">
							<div class="card-body">
								<h5 class="card-title">{`Name: ${snippet.title}` || "Snippet without name"}</h5>
								<p class="card-text">{`Description: ${snippet.description}` || ""}</p>
								<p>{`Owner: ${snippet.owner.login}`}</p>
								<img class="card-img-top" src={`${process.env.PUBLIC_URL}/img/defaultProject.jpg`} alt='code'></img>
								<p />
								<div>
									<Link to={"/search-snippet/" + snippet._id}>
										<button class="btn btn-primary">Open snippet</button>
									</Link>
								</div>
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
