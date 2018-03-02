import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Results from "./pages/Results";
import SavedArticles from './pages/SavedArticles';
import NoMatch from "./pages/NoMatch";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/saved/" component={SavedArticles} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
