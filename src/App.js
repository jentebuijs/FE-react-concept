import './App.css';
import Home from "./pages/home/home";
import Subreddit from "./pages/subreddit/subreddit";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/subreddit/:subredditId">
        <Subreddit />
      </Route>
    </Switch>
  );
}

export default App;
