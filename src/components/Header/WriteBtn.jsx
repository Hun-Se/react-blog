import './WriteBtn.css';
import WriteImage from '../../assets/icon-modify-white.svg';

function WriteBtn () {
  return (
    <li>
      <a href="#none" className="button">
        <img src = {WriteImage} alt="" />
        <span>Write</span>
      </a>
    </li>
  )
}

export default WriteBtn