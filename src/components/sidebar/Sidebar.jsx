import "./sidebar.scss"
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import * as Icon from "../../icons/index"
import { useContext, useState } from "react";

import '../../i18next';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {

    const { t } = useTranslation();
    const {dispatch} = useContext(DarkModeContext)
    const [mode, setMode] = useState("");

    console.log(mode);
   
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/dashboard" style={{textDecoration:"none"}}>
                <span className="logo">{t('title.logo')}</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">{t('title.main')}</p>
                    <Link to="/dashboard" style={{textDecoration:"none"}}>
                        <li>
                            <Icon.DashboardIcon className="icon" />
                            <span>{t('sidebar.dashboard')}</span>
                        </li>
                    </Link>
                    <p className="title">{t('title.list')}</p>
                    <Link 
                        to="/users" 
                        style={{textDecoration:"none"}} 
                        onClick={(e) => setMode(e.target.id)}
                    >
                        <li id="user">
                            <Icon.PersonOutlinedIcon className="icon" />
                            <span>{t('sidebar.users')}</span>
                        </li>
                    </Link>
                    <Link to="/products" style={{textDecoration:"none"}}>
                        <li>
                            <Icon.StoreIcon className="icon" />
                            <span>{t('sidebar.products')}</span>
                        </li>
                    </Link>
                    <Link to="/orders" style={{textDecoration:"none"}}>
                        <li>
                            <Icon.CreditCardIcon className="icon" />
                            <span>{t('sidebar.orders')}</span>
                        </li>
                    </Link>
                    <Link to="/delivery" style={{textDecoration:"none"}}>
                        <li>
                            <Icon.LocalShippingIcon className="icon" />
                            <span>{t('sidebar.delivery')}</span>
                        </li>
                    </Link>
                    <p className="title">{t('title.useful')}</p>
                    <Link to="/stats" style={{textDecoration:"none"}}>
                        <li>
                            <Icon.InsertChartIcon className="icon" />
                            <span>{t('sidebar.stats')}</span>
                        </li>
                    </Link>
                    <Link to="/notifications" style={{textDecoration:"none"}}>
                        <li>
                            <Icon.NotificationsNoneIcon className="icon" />
                            <span>{t('sidebar.notif')}</span>
                        </li>
                    </Link>
                    <p className="title">{t('title.service')}</p>
                    <Link to="/services" style={{textDecoration:"none"}}>
                        <li>
                            <Icon.SettingsSystemDaydreamOutlinedIcon className="icon" />
                            <span>{t('sidebar.sysHealth')}</span>
                        </li>
                    </Link>
                    <Link to="/logs" style={{textDecoration:"none"}}>
                        <li>
                            <Icon.PsychologyOutlinedIcon className="icon" />
                            <span>{t('sidebar.logs')}</span>
                        </li>
                    </Link>
                    <Link to="/settings" style={{textDecoration:"none"}}>
                        <li>
                            <Icon.SettingsApplicationsIcon className="icon" />
                            <span>{t('sidebar.settings')}</span>
                        </li>
                    </Link>
                    <p className="title">{t('title.user')}</p>
                    <Link to="/profile" style={{textDecoration:"none"}}>
                        <li>
                            <Icon.AccountCircleOutlinedIcon className="icon" />
                            <span>{t('sidebar.profile')}</span>
                        </li>
                    </Link>
                    <Link to="/logout" style={{textDecoration:"none"}}>
                        <li>
                            <Icon.ExitToAppIcon className="icon" />
                            <span>{t('sidebar.logout')}</span>
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="bottom">
                <div 
                    className="colorOption" 
                    onClick={()=> dispatch({type:"LIGHT"})}></div>
                <div 
                    className="colorOption"
                    onClick={()=> dispatch({type:"DARK"})}></div>
            </div>
        </div>
    )
}

export default Sidebar;
