import './App.css';
import {Route, Switch} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu";
import User from "./user";
import Search from "./Search";
import SearchResult from "./SearchResult"

function App() {
  const Twitter=()=>{
    return <h1>Visit at @BhuttoSays</h1>
  };
  return (
    <>
      <Menu>
      </Menu>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/Contact" component={Contact}/>
        <Route exact path="/Search" component={Search}/>
        <Route exact path="/User/:fname/:lname" component={User}/>
        <Route exact path="/Contact/Twitter" component={Twitter}/>
        <Route component={Error}/>
      </Switch>
      {/* <About/>
      <Contact/> */}
    </>
  );
}

export default App;
