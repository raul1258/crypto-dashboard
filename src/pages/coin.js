import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Info from "../components/Coin/Info/info";
import Header from "../components/Common/Header";
import Loading from "../components/Common/Loading/loading";
import List from "../components/Dashboard/ListComponent/List";
import LineChart from "../components/Coin/Chart";
import {getCoinData} from "../functions/getCoinData";
import {getCoinPrices} from "../functions/getCoinPrices"
import {getDate} from "../functions/getDate";


function CoinPage() {
  const { id } = useParams();
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(120);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{}],
  });

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
  };


  useEffect(() => {
    if (id) {
      axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((response) => {
          console.log("Response Data >>>", response.data);
          setCoin({
            id: response.data.id,
            name: response.data.name,
            symbol: response.data.symbol,
            image: response.data.image.large,
            desc : response.data.description.en,
            price_change_percentage_24h:
            response.data.market_data.price_change_percentage_24h,
            total_volume: response.data.market_data.total_volume.usd,
            current_price: response.data.market_data.current_price.usd,
            market_cap: response.data.market_data.market_cap.usd,
          });
          setLoading(false);
        })
        .catch((error) => {
          console.log("Error>>>", error);
        });
    }
  }, [id]);

  return (
    <div>
    <Header />
    {loading ? (
      <Loading />
    ) : (
      <>
        <div className="grey-container">
          <List coin={coin} />
        </div>
        {/* <div className="grey-container">
          <LineChart chartData={chartData} options={options} />
        </div> */}
        <Info name={coin.name} desc={coin.desc} />
      </>
    )}
  </div>
  );
}

export default CoinPage;