import './Follow.css'

function Follow () {
  const snslist = [
    { id: 1, snsName: "Facebook", snsImg: "./images/Facebook.svg"},
    { id: 2, snsName: "Twitter", snsImg: "./images/Twitter.svg"},
    { id: 3, snsName: "Instagram", snsImg: "./images/Instagram.svg"},
    { id: 4, snsName: "GitHub", snsImg: "./images/GitHub.svg"},
  ]
  return (
    
    <>
      <h3>Follow</h3>
        <ul className="sns">
          {snslist.map(item => 
            <li key={item.id}>
              <a href="#none">
                <img src= {item.snsImg} alt={item.snsName} />
              </a>
            </li>
          )}
        </ul>
    </>
  )
}

export default Follow