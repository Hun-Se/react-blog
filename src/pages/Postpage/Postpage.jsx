import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PostBanner from "./PostBanner";
import PostView from "./PostView";


function Postpage (props) {

  return (
    <>
        <Header/>
        <PostBanner/>
        <PostView/>
        <Footer/>
    </>
  )
}

export default Postpage