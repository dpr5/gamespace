import "./App.css";
import PrimarySearchAppBar from "./Header/Header";
import { Route, Router, Switch } from "react-router-dom";
import About from "./About/About";
import Home from "./Home/Home";
import Users from "./Users/Users";

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />

      <div className="content-container">
        <div className="content-left-bar-vertical">nav bar</div>
        <div className="main-content-feed">
          <Switch>
            <Route to="/" component={Home} />

            <Route to="/about" component={About} />

            <Route to="/users" component={Users} />
          </Switch>
        </div>
        <div className="content-right-bar-vertical">Ad space</div>
      </div>
    </div>
  );
}

export default App;
