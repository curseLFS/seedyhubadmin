import "./home.scss";
import * as Component from "../index";

const Home = () => {

  return (
    <div className="home">
        <Component.Sidebar />
        <div className="homeContainer">
          <Component.Navbar />
          <div className="widgets">
            <Component.Widget type="user" />
            <Component.Widget type="order" />
            <Component.Widget type="earning" />
            <Component.Widget type="balance" />
          </div>
          <div className="charts">
            <Component.Featured />
            <Component.Chart title="Last 6 Months (Revenue)" aspect={2 / 1} /> 
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
              <Component.Table />
          </div>
        </div>       
    </div>
  )
} 

export default Home