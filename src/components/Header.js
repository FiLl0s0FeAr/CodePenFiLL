import "../styles/Header.css";
import ConnectedNickName from "./HeaderFunctions";

const Header = () => {
	return (
		<nav>
			<ConnectedNickName />
		</nav>
	);
};

export default Header;
