import "./sidebar.scss"
import DashboardIcon from "@mui/icons-material/Dashboard"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from "react-router-dom"

import { DarkModeContext } from "../../../context/darkModeContext";
import { useContext } from "react";


const Sidebar = () => {

    const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
        <div className="top">
            <Link to="/" style={{ textDecoration:"none" }}>
                <span className="logo">Fruity</span>
            </Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li className="icon">
                    <DashboardIcon />
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>

                <Link to="/users" style={{ textDecoration:"none" }}>
                    <li className="icon">
                        <PersonOutlineOutlinedIcon/>
                        <span>Users</span>
                    </li>
                </Link>

                <Link to="/products" style={{ textDecoration:"none" }}>
                    <li className="icon">
                        <StoreIcon/>
                        <span>Products</span>
                    </li>
                </Link>
                
                <li className="icon">
                    <CreditCardIcon/>
                    <span>Orders</span>
                </li>
                <li className="icon">
                    <LocalShippingIcon/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li className="icon">
                    <InsertChartIcon/>
                    <span>Status</span>
                </li>
                <li className="icon">
                    <NotificationsIcon/>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICES</p>
                <li className="icon">
                    <SettingsSystemDaydreamIcon/>
                    <span>System Health</span>
                </li>
                <li className="icon">
                    <PsychologyIcon/>
                    <span>Logs</span>
                </li>
                <li className="icon">
                    <SettingsApplicationsIcon/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li className="icon">
                    <AccountCircleOutlinedIcon/>
                    <span>Profile</span>
                </li>
                <li className="icon">
                    <ExitToAppOutlinedIcon/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom"> 
            <div className="colorOption" onClick={() => dispatch({type:"LIGHT"})}></div>
            <div className="colorOption" onClick={() => dispatch({type:"DARK"})}></div>

        </div>
    </div>
  )
}

export default Sidebar