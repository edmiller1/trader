import "../../App.css";
import "./App.scss";
import { Dashboard } from "../Dashboard/Dashboard";
import { Markets } from "../Markets/Markets";
import { WatchList } from "../WatchList/WatchList";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/markets" exact component={Markets} />
          <Route path="/watchlist" exact component={WatchList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
