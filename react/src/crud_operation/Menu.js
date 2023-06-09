import React, {useState} from "react";
import { toast } from 'react-toastify';
import '../css/menu.css'
import Toggle from "../review/toggle";

function showNotification(message, status = 'success') {
  const toastFunc = status === 'error' ? toast.error : toast.success;

  toastFunc(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
}




export function Profile() {
  return (
    <div className="profile-menu">
      <ProfileMenu></ProfileMenu>
    </div>
  );
}
export function ProfileMenu(props) {
  return (
    <div className="sub-menu">
      {props.children}

      <li>Username: </li>
      <li>Email: </li>
    </div>
  );
}
// _____________________________________________________SETTINGS_______________________________________________________________



export function Settings() {
  return (
    <div className="setting-menu">
      <SettingsMenu></SettingsMenu>
    </div>
  );
}


export function SettingsMenu(props) {

  const handleToggleTheme = () => {
    setIsDarkMode(prevState => !prevState);
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
  }
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="sub-menu">
      {props.children}
      <h4 onClick={handleToggleTheme} >
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}</h4>

      <li>Change Password</li>
    </div>
  );
}

// _____________________________________________________LOGOUT_______________________________________________________________
export function Logout() {
  return (
    <div className="logout-menu">
      <LogoutMenu></LogoutMenu>
    </div>
  );
}
function logout() {
  showNotification("You have done a logout!","success")
  window.location ="/login";
}
export function LogoutMenu(props) {
  return (
    <div className="sub-menu">
      {props.children}

      <li onClick={logout}>logout</li>
    </div>
  );
}