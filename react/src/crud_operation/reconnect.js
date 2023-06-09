import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/icon.css'
import { BASEURLONLINE } from "../url";

function Reconnect() {

    function showNotification(message, status = 'success') {
        const toastFunc = status === 'error' ? toast.error : toast.success;
      
        toastFunc(message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }

    const handleReconnectClick = async () => {
        try {
            const response = await fetch(BASEURLONLINE + 'reconnect')
            
            
            if(response.status === 200) {

            showNotification("Reconnected to DB ", 'success')
            window.location = "#";
        }

        } catch (err) {
            console.error(err);
            showNotification("Enable connecting to DB ", 'error')
        }

    };
    return(
        <div className="reconnect">
            <button onClick={handleReconnectClick}> Reconnect </button>
        </div>
    )
}
export default Reconnect;
  