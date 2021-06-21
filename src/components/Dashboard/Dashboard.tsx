import { Header } from "../Header/Header";
import { PortfolioGraph } from "../PortfolioGraph/PortfolioGraph";
import { BuyingPower } from "../BuyingPower/BuyingPower";
import { Holdings } from "../Holdings/Holdings";
import { News } from "../News/News";

interface Props {}

export const Dashboard: React.FC<Props> = () => {
  let portfolioValue: number = 10000.0;
  return (
    <div className="App">
      <Header />
      <div className="container">
        <PortfolioGraph portfolioValue={portfolioValue} />
        <BuyingPower />
        <Holdings />
        <News />
      </div>
    </div>
  );
};
