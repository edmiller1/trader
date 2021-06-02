import "../../App.css";
import "./App.scss";
import { Header } from "../Header/Header";
import { PortfolioGraph } from "../PortfolioGraph/PortfolioGraph";
import { BuyingPower } from "../BuyingPower/BuyingPower";
import { Holdings } from "../Holdings/Holdings";
import { News } from "../News/News";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <PortfolioGraph />
        <BuyingPower />
        <Holdings />
        <News />
      </div>
    </div>
  );
}

export default App;
