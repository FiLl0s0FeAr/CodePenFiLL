import "../styles/Main.css";

export const Main = ({ history }) => {
	return (

		<div class="px-4 py-5 my-5 text-center">
			<h1 class="display-5 fw-bold">CodePen FiLL Project</h1>
			<div class="col-lg-6 mx-auto">
				<p class="lead mb-4">CodePen is an online community for testing and showcasing user-created HTML, CSS and JavaScript code snippets. It functions as an online code editor and open-source learning environment, where developers can create code snippets, called "pens," and test them. It was founded in 2012 by full-stack developers Alex Vazquez and Tim Sabat and front-end designer Chris Coyier. Its employees work remotely, rarely all meeting together in person. CodePen is a large community for web designers and developers to showcase their coding skills, with an estimated 330,000 registered users and 14.16 million monthly visitors.</p>
				<div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
					<button type="button" class="btn btn-primary btn-lg px-4 gap-3" onClick={() => history.push("./login")}>Login</button>
					<button type="button" class="btn btn-outline-secondary btn-lg px-4" onClick={() => history.push("./reg")}>Registration</button>
				</div>
			</div>
		</div>
	);
};
