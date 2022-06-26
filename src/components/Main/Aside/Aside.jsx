import AboutMe from './AboutMe/AboutMe';
import Follow from './Follow/Follow';
import './Aside.css';

function Aside () {
  return (
    <aside className="about">
					<AboutMe/>
					<Follow/>
		</aside>
  )
}

export default Aside