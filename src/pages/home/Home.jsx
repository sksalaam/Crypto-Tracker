import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className="hero">
        <h1>Largest <br/> Crypto Marketplace</h1>
        <p>Welcome to worlds Largest cryptocurrency marketplace. Sign up to explore more about Crptos</p>
        <form>
            <input type='text' placeholder='Search crypto'/>
            <button type='submit'>Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
            <p>#</p>
            <p>Coin</p>
            <p>Price</p>
            <p>24H Change</p>
            <p>Market Cap</p>
        </div>
      </div>
    </div>
  )
}

export default Home

