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
          <Route
            path="/"
            render={() => (
              <div className="flex flex-col justify-center items-center">
                <img
                  src="https://themeforest.img.customer.envatousercontent.com/files/232572468/01_preview.__large_preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=e30d74dd2bf0709cabe26d984b113cd1"
                  alt="404 Error"
                />
                <h1 className="text-6xl uppercase mb-10">404 Error!</h1>
                <h1 className="text-2xl font-light">Page Not Found</h1>
              </div>
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
