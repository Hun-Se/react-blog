import { Link } from 'react-router-dom';
import './Logo.css';
import logoImage from '../../assets/Logo.svg';

function Logo () {
  return (
  <h1>
		<Link to="/">
			<img src= {logoImage} alt="My Blog" />
		</Link>
	</h1>
  )
}

export default Logo