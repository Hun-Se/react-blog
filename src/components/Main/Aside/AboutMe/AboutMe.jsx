import Categores from "../Categores/Categores";
import "./AboutMe.css";
import ProfileImage from "../../../../assets/profile.jpg";

function AboutMe () {
  return (
    <>
    <h2>About Me</h2>
		<img src = {ProfileImage} alt="" className="user-profile" />
		<p className="user-name">Chilli</p>
		<p className="user-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <Categores/>
    </>
  )
}

export default AboutMe