import './PostView.css';
import ProfileImage from '../../assets/profile.jpg';
import postBackground from '../../assets/post-background6.jpg';

function PostView () {
  return (
    <div class="view">
			<div class="max-width">
				<section class="wrap-box">
					<div class="inner">
						<dl class="author-wrap">
							<dt class="a11y-hidden">Author</dt>
							<dd class="author"><img src= {ProfileImage} alt="" /> Chilli</dd>
							<dt class="a11y-hidden">Created</dt>
							<dd class="created">2022.05.25</dd>
						</dl>
						<dl class="category">
							<dt class="a11y-hidden">Category</dt>
							<dd>Life</dd>
							<dd>Style</dd>
						</dl>
						<div class="title-wrap">
							<h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
							<button class="btn-like">Like</button>
						</div>
						<hr />
						<div class="view-contents">
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
								facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
								dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum
								nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
								amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio
								cum incidunt repudiandae vel.
							</p>
							<img src= {postBackground} alt="" />
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
								facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
								dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum
								nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
								amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio
								cum incidunt repudiandae vel.
							</p>
						</div>
						<div class="btn-group">
							<a href="#" class="btn-modify">
								<span class="a11y-hidden">modify</span>
							</a>
							<button type="button" class="btn-delete">
								<span class="a11y-hidden">delete</span>
							</button>
						</div>
						<a href="./" class="btn-back">
							<span class="a11y-hidden">Back</span>
						</a>
					</div>
				</section>
			</div>
		</div>
  )
}

export default PostView