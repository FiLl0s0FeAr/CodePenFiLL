import { ConnectAvatarUpload } from "pages/AvatarUpload";

import "../styles/Header.css";
import ConnectedNickName from "./HeaderFunctions";

const Header = () => {
	return (
		<nav className='header'>
			<ConnectAvatarUpload />
			<ConnectedNickName />
		</nav>
	);
};

export default Header;
