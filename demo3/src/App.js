import './App.css';
import {Route, Switch} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <>

      <Switch>
        <Route path="/" component={About} />
        <Route path ="/YehContactPageHay"
      </Switch>
      {/* <About/>
      <Contact/> */}
    </>
  );
}

export default App;
