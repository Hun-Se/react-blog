import "./ProfileHeader.css";
import ProfileImage from '../../assets/profile.jpg';

function ProfileHeader () {
  return (
    <li className="profile-img">
      <a href="#none">
      <img src= {ProfileImage} alt="My Page"/>
      </a>
    </li>
  )
}

export default ProfileHeader