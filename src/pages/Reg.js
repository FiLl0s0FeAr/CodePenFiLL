import React, { useState } from "react";

import "../styles/Login.css"
import "bootstrap/dist/css/bootstrap.min.css"

export const Reg = ({ Reg }) => {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [passwordValid, setPasswordValid] = useState("");
	return (
		<div className="Auth-form-container">
			<form className="Auth-form">
				<div className="Auth-form-content">
					<h3 className="Auth-form-title">Sign Up</h3>
					<div className="form-group mt-3">
						<label>Username</label>
						<input
							type="login"
							className="form-control mt-1"
							placeholder="Enter username"
							value={login}
							onChange={e => setLogin(e.target.value)}
						/>
					</div>
					<div className="form-group mt-3">
						<label>Password</label>
						<input
							type="password"
							className="form-control mt-1"
							placeholder="Enter password"
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
					<div className="form-group mt-3">
						<label>Password</label>
						<input
							type="password"
							className="form-control mt-1"
							placeholder="Confinm Password"
							onChange={e => setPasswordValid(e.target.value)}
						/>
					</div>
					<div className="d-grid gap-2 mt-3">
						<button type="submit" className="btn btn-primary" disabled={!login || !password || password !== passwordValid} onClick={() => Reg(login, password)}>
							Submit
						</button>
					</div>
					<div className="d-grid gap-2 mt-3">
						<a href='/'>
							<button type="button" className="btn btn-primary main-page">
								Main page
							</button>
						</a>
					</div>
				</div>
			</form>
		</div>
	)
};
