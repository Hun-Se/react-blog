import Card from './Card';
import data from '../../../DB/data';
import './Posts.css';


function Posts () {
  return (
    <>
      <h2 className="a11y-hidden">
        Post
        </h2>
        <ul className='posts'>
          {data.map(item => 
                <Card
                    key={item.id}
                    postpage = {item.postpage}
                    thumbnailImg={item.thumbnailImg}
                    category1={item.category1}
                    categlry2={item.categlry2}
                    cardtitle={item.cardtitle}
                    authorImg={item.authorImg}
                    authordd={item.authordd}
                    authordt={item.authordt}
                    authorDate={item.authorDate}
                    postDescription={item.postDescription}
                />
            )}
        </ul>
    </>
  )
}

export default Posts