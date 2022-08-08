import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Header from "../components/Header";

const Snippets = ({ snippets }) => {
	return snippets ? (
		<div>
			<Header />
			<div>
				{snippets?.map(snippet => (
					<div key={snippet._id}>
						<div>
							<p>{`Name: ${snippet.title}` || "Snippet without name"}</p>
							<p>{`Description: ${snippet.description}` || ""}</p>
							<img src={`${process.env.PUBLIC_URL}/img/defaultProject.jpg`} alt='code'></img>
							<div>
								<Link to={"/snippet/" + snippet._id}>
									<button>Open project</button>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	) : (
		<div>
			<Link to='/'>
				<button>Back to Main Page</button>
			</Link>{" "}
			<br /> <br />
			<div>
				<span style={{ margin: 10, fontSize: 20 }}>Loading...</span>
			</div>
		</div>
	);
};

const ConnectedSnippets = connect(state => ({snippets: state?.promise?.findSnippet?.payload?.data?.SnippetFind,}))(Snippets);
export default ConnectedSnippets;
