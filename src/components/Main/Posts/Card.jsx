import './Card.css';
import { Link } from 'react-router-dom';
import ProfileImage from '../../../assets/profile.jpg';
import PostImages from './PostImages';

function Card (props) {
	console.log(props.postpage);
  return (
					<li key={props.id}>
						<Link to={props.postpage} className="post">
							<article>
								<PostImages thumbnailImg={props.thumbnailImg} authordd={props.authordd}/>
								<div className="contents-wrap">
									<dl className="category">
										<dt className="a11y-hidden">Category</dt>
										<dd>{props.category1}</dd>
										<dd>{props.category2}</dd>
									</dl>


									<h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>

									<dl className="author-wrap">
										<dt className="a11y-hidden">{props.cardtitle}</dt>
										<dd className="author"><img src= {ProfileImage} alt="" /> {props.authordd}</dd>
										<dt className="a11y-hidden">{props.authordt}</dt>
										<dd className="created">{props.authorDate}</dd>
									</dl>
								

									<p className="post-description">
										{props.postDescription}
									</p>
								</div>
							</article>
						</Link>
					</li>
  )
}

export default Card