import { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Hompage from "./pages/Hompage/Hompage";
import Postpage from "./pages/Postpage/Postpage";

function App(props) {
  const GlobalStyle = createGlobalStyle`
    html {
  font-size: 10px;
}

body {
  font-size: 1.6rem;
  line-height: 1.4;
}
`;

  return (
    <div className="App">
      <GlobalStyle />
      <Reset />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={Hompage} />
        <Route path={props.postpage} component={Postpage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
