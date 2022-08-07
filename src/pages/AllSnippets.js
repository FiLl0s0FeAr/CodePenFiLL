import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Snippets = ({ snippets }) => {
	return snippets ? (
		<div>
			<div style={{ margin: 10 }}>
				<div>
					<Link to='/new-snippet'>
						<button style={{ marginTop: 5 }}>
							New project
						</button>
					</Link>
				</div>
			</div>

			<br />

			<div>
				{snippets?.map(snippet => (
					<div key={snippet._id}>
						<div>
							<p>{`Name: ${snippet.title}` || "Snippet without name"}</p>
							<p>{`Description: ${snippet.description}` || ""}</p>
							<img src={`https://www.datocms-assets.com/45470/1631110818-logo-react-js.png?fm=webp`} alt='code'></img>
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
