import "./App.css";
import PrimarySearchAppBar from "./Header/Header";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./About/About";
import Home from "./Home/Home";
import Users from "./Users/Users";
import Navbar from "./Header/Navbar";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />

      <div className="content-container">
        <div className="content-left-bar-vertical">
          <Navbar />
        </div>
        <div className="main-content-feed">
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/home" component={Home} />

            <Route exact path="/about" component={About} />

            <Route exact path="/users" component={Users} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </div>
        <div className="content-right-bar-vertical">Ad space</div>
      </div>
    </div>
  );
}

export default App;
