import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Search from "./pages/Search/Search";
import SavedArticles from './pages/SavedArticles/SavedArticles';
import NoMatch from "./pages/NoMatch/NoMatch";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/home" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved/" component={SavedArticles} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
