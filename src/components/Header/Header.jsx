import Logo from './Logo';
import Login from './Login';
import './Header.css';

function Header () {
	return (
		<header>
			<div className="max-width">
				<Logo/>
				<Login/>
			</div>
		</header>
  )
}

export default Header