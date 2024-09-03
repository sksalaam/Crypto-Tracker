import { useContext, useState, useEffect } from "react";
import "./home.css";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { allCoin, currency  } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState([]);


  const onChange = (e)=>{
    const value = e.target.value;
    setInput(value);
    if (value === ""){
     setDisplayCoin(allCoin)
    }
   
  }
  const handleSubmit = async (event)=>{
    event.preventDefault();
    const coins = await  allCoin.filter((data)=>data.name.toLowerCase().includes(input.toLowerCase()))
    setDisplayCoin(coins);
  }

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);
  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br /> Crypto Marketplace
        </h1>
        <p>
          Welcome to worlds Largest cryptocurrency marketplace. Sign up to
          explore more about Crptos
        </p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search crypto" list="coinlist" onChange={onChange} value={input} required/>

        <datalist id='coinlist'>
          {allCoin.slice(0, 10).map((item, index) => (
            <option key={index} value={item.name}>{item.name}</option>
          ))}
        </datalist>

          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p className="coin">Coin</p>
          <p>Price</p>
          <p className="change">24H Change</p>
          <p style={{textAlign:'center'}} className="market-cap">Market Cap</p>
        </div>
        {displayCoin.slice(0, 10).map((item, index) => (
          <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
                <img src={item.image}/>
                <p>{item.name + " - " + item.symbol}</p>

            </div>
            <p>{currency.symbol} { item.current_price.toLocaleString()}</p>
            <p className={item.price_change_percentage_24h >0 ? 'green' : 'red'}>
                {Math.floor(item.price_change_percentage_24h * 100)/100}</p>
            <p style={{textAlign:'center'}} className="market-cap">{currency.symbol}{item.market_cap.toLocaleString()} </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
