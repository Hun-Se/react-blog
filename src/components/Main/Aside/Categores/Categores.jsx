import './Categores.css'
function Categores () {
  const categories = [
  { id: 1, categoresName: 'Life'},
  { id: 2, categoresName: 'Tech'},
  { id: 3, categoresName: 'Photo'},
  { id: 4, categoresName: 'Sport'},
  { id: 5, categoresName: 'Develop'},
  { id: 6, categoresName: 'Music'},
  ]
  return (
    <>
    <h3>Categories</h3>
    <ul className="categories">
      {categories.map(item => <li key={item.id}><a href="#none">{item.categoresName}</a></li>)}
    </ul>
    </>
  )
}

export default Categores