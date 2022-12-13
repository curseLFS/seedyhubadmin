import "./navbar.scss"
import { DarkModeContext } from "../../context/darkModeContext";
import { SearchOutlinedIcon, LanguageOutlinedIcon, DarkModeOutlinedIcon, FullscreenExitOutlinedIcon, NotificationsNoneOutlinedIcon, ChatBubbleOutlineOutlinedIcon, ListOutlinedIcon } from "../../icons/index";
import { Link } from "react-router-dom";

import { useContext, useState } from "react";

import '../../i18next';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from "../../lang/languageContext";



const Navbar = () => {
  
  const [selected, setSelected] = useState();
  const { t, i18n } = useTranslation();
  const selectDropdown = (e) => {
    const val = e.target.value;
    setSelected(val);
    
    i18n.changeLanguage(val);
  };
  
  const {dispatch} = useContext(DarkModeContext)
   
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          {/* <input type="text" placeholder={t('search.3')} /> */}
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <label htmlFor="lang">
              <LanguageOutlinedIcon className="icon" />
            </label>
            <select               
              className="form-select"
              onChange={selectDropdown}            
              id="lang"
            >
              <option value="en" className="select-option" >English</option>
              <option value="ja" className="select-option" >Japanese</option>
            </select>
          </div>
          <div className="item">
            <DarkModeOutlinedIcon 
              className="icon" 
              onClick={()=> dispatch({type:"TOGGLE"})}
            />            
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />            
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />  
            <div className="counter">1</div>          
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />            
            <div className="counter">2</div>          
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />            
          </div>
          <div className="item">
          <Link  to="/profile" style={{textDecoration:"none"}}>
              <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="" 
                  className="avatar"
                  />    
            </Link>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Navbar