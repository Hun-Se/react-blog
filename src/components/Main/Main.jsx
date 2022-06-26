import './Main.css';
import Posts from './Posts/Posts';
import Aside from './Aside/Aside';


function Main () {
  return (
    <main>
    <div className='max-width'>
        <Posts/>
        <Aside/>
    </div>
    </main>
  )
}

export default Main