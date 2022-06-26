import LoginoutBtn from "./LoginoutBtn"
import ProfileHeader from "./ProfileHeader"
import WriteBtn from "./WriteBtn"
import './Login.css';

function Login () {
  return (
  <ul>
    <ProfileHeader/>
    <WriteBtn/>
    <LoginoutBtn/>
  </ul>
  )
}

export default Login