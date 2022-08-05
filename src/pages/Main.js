import "../styles/Main.css";

export const Main = ({ history }) => {
	return (
		<section id='body'>
			<div className='content'>
				<h1>CodePen FiLL Project</h1>
			</div>

			<button onClick={() => history.push("./login")}>
				Login
			</button>
            
			<button onClick={() => history.push("./reg")}>
				Reristration
			</button>
		</section>
	);
};
