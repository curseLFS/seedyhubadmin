import "./single.scss"
import { Sidebar, Navbar, Chart, List } from "../index";
import '../../i18next';
import { useTranslation } from 'react-i18next';

const Single = () => {
  const { t, i18n } = useTranslation();

  // i18n.changeLanguage('ja');

  return (
    <div className="single">
       <Sidebar />
       <div className="singleContainer">
       <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">{t('info.2')}</h1>
            {/* <h1 className="title">Information</h1> */}
            <div className="item">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="" 
                className="itemImg"
              />    
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div> 
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 1232321 21</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Elton St. 234 Garden Yd. New York</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>          
          <List />
        </div>
       </div>
    </div>
  )
}

export default Single