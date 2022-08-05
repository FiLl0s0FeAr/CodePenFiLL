import { useState } from "react";

export const LogIn = ({ onLogin }) => {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className='login'>
			<h3>Login</h3>
			<input className='username'	type='login' placeholder='Username'	value={login} onChange={e => setLogin(e.target.value)}/>
			<input className='password'	type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>

			<button type='submit' className='button-submit'	disabled={!login || !password} onClick={() => onLogin(login, password)}>
				Authorize
			</button>

			<button>
				<a href='/'>Main page</a>
			</button>
		</div>
	);
};
