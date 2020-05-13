import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../../assets/Garden.png";
import {useHistory} from 'react-router-dom';

function UserDashboardHeader() {
    const history = useHistory();
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userType');
        history.push('/');
      }
    
    return (
        <>
            <header className="userDashboardHeader">
                <div>
                    <img src={Logo} alt="The Garden of Knowledge" /> 
                </div>
                <Link className="logOut" onClick={logout}>Sign Out</Link>
            </header>
        </>
    )
}
  
export default UserDashboardHeader;