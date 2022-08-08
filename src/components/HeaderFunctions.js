import { connect } from "react-redux";
import { ConnectAvatarUpload } from "pages/AvatarUpload";

import { actAuthLogOut } from "store/actions/authorization/actAuthLogOut";

import "../styles/Header.css";

const NickName = ({ username, onLogOut }) => {
	return (
		<>
		<header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
		<a href="#" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
			<ConnectAvatarUpload />
			<span class="fs-4">CodePen FiLL</span>
		</a>

		<ul class="nav nav-pills">
			<li class="nav-item"><div class="nav-link active" aria-current="page">{username}</div></li>
			<li class="nav-item"><a href="/search" class="nav-link">Search</a></li>
			<li class="nav-item"><a href="/snippets" class="nav-link">My Snippets</a></li>
			<li class="nav-item"><a href="/" class="nav-link" onClick={() => onLogOut()}>Log out</a></li>
		</ul>
		</header>
		</>
	);
};

const ConnectedNickName = connect(state => ({ username: state?.auth?.payload?.sub?.login, logedIn: state.auth.token }), {onLogOut: actAuthLogOut,})(NickName);
export default ConnectedNickName;

