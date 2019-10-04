import React from "react";
import { Link } from "react-router-dom";
import Chart from "./Chart";

const Charts = ({ coinData, match }) => {
	const selectedCoin = match.params.coin || '';
	return (
		<div className="charts">
			{coinData.map(coin => {
				if (selectedCoin.length === 0) {
					return (<div className="chart__container" key={coin.name}>
						<Link className="coin__title" to={`/${coin.name.toLowerCase()}`}>{coin.name}</Link>
						<h4 className="coin__symbol">{coin.symbol}</h4>
						<div className="coin__logo">
							<img src={coin.image} height="40" alt={coin.name} />
						</div>
						<Chart sparklineData={coin.sparkline_in_7d.price} />
					</div>);
				} else if (coin.name.toLowerCase() === selectedCoin) {
					return (<div className="chart__container" key={coin.name}>
						<Link className="coin__title" to={`${coin.name.toLowerCase()}`}>{coin.name}</Link>
						<h4 className="coin__symbol">{coin.symbol}</h4>
						<div className="coin__logo">
							<img src={coin.image} height="40" alt={coin.name} />
						</div>
						<Chart sparklineData={coin.sparkline_in_7d.price} />
					</div>);
				} else return null;
			}
			)}
		</div>
	);
};
export default Charts;
