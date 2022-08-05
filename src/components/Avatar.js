import React from "react";
import { connect } from "react-redux";

import "../styles/Header.css";

function Avatar({ link }) {
	return (
		<img src={link ? "http://localhost:3000/" + link : `https://cdnb.artstation.com/p/assets/images/images/013/085/927/large/furio-tedeschi-mechsmoke.jpg?1537981733`} className='avatar' alt='avatar'></img>
	);
}

export const ConnectedAvatar = connect(state => ({link: state?.promise?.findUser?.payload?.data?.UserFindOne?.avatar?.url,}))(Avatar);
