import './LoginoutBtn.css';
import LogoutImage from '../../assets/icon-logout.svg';

function LoginoutBtn () {
  return (
    <li>
    <button className="button white">
      <img src= {LogoutImage} alt="logout"/>
      <span>Logout</span>
    </button>
  </li>
  )
}

export default LoginoutBtn