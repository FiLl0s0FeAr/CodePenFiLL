import { connect } from "react-redux";

import { actAuthLogOut } from "store/actions/authorization/actAuthLogOut";

import "../styles/Header.css";

const NickName = ({ username, onLogOut }) => {
	return (
		<>
			<div className='heared_user'>
				<div>{username}</div>

				<a href='/search'> 
					<button>Search</button>
				</a>

				<a href='/snippets'>
					<button className='button_snippets'>My Snippets</button>
				</a>

				<a href='/'>
					<button onClick={() => onLogOut()}>Log out</button>
				</a>
			</div>
		</>
	);
};

const ConnectedNickName = connect(state => ({ username: state?.auth?.payload?.sub?.login, logedIn: state.auth.token }), {onLogOut: actAuthLogOut,})(NickName);
export default ConnectedNickName;
