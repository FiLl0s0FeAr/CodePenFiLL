import React, { useState } from "react";

export const Reg = ({ Reg }) => {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [passwordValid, setPasswordValid] = useState("");
	return (
		<div className='login'>
			<h3>Registration</h3>
			<input className='username' type='login' placeholder='Username' value={login} onChange={e => setLogin(e.target.value)}/>
			<input className='password' type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
			<input className='password-confirm' type='password' placeholder='Confinm Password' value={passwordValid} onChange={e => setPasswordValid(e.target.value)}/>

			<button type='submit' className='button-submit' disabled={!login || !password || password !== passwordValid} onClick={() => Reg(login, password)}>
				Remember me.{" "}
			</button>

			<button className='main_page'>
				<a href='/'>Main page</a>
			</button>
		</div>
	);
};
