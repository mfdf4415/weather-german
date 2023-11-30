import { Link } from 'react-router-dom';
import { Bars3Icon, HeartIcon } from '@heroicons/react/24/solid';
import { useAppContext } from './context/AppContext';

const Header = () => {
	const { showAside, changeShowAside } = useAppContext();
	return (
		<header className="header">
			<span>
				<Bars3Icon
					onClick={() => changeShowAside(!showAside)}
					className="hamburger"
				/>
			</span>
			<h1><Link to="/">WEATHER&bull;APP</Link></h1>
			<Link to="/favorite">
				<HeartIcon />
			</Link>
		</header>
	);
};

export default Header;
