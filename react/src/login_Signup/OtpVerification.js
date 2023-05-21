import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { SPRINGURL } from "../url";



function OtpVerification() {
   const [otp, setOtp] = useState({otp: ''});

   function showNotification(message, status = 'success') {
      const toastFunc = status === 'error' ? toast.error : toast.success;
  
      toastFunc(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }

    const OtpWorks = async (e) => {
      e.preventDefault();
      const enteredOtp = otp.otp;
      try {
        const response = await fetch(SPRINGURL + "elastic/email/otp")
        .then(response => response.json())
        .then(data => {
        console.log(data);
        console.log("otp = "+ enteredOtp)
        if (data === -1) {
          showNotification("Regenrate Otp", "error");
        }
        else if(data == enteredOtp) {
          showNotification("otp is correct!", "success");
         
          
        }
        else {
          showNotification("otp is Incorrect! \n Re-Enter otp.", "error");
      }});
      // addAuthUser();
      } catch (err) {
        console.log(err.message);
        showNotification(err.message, "error");
      }
    }

const handleChangeForOtp = (e) => {
   setOtp({...otp, otp: e.target.value});
};

   return (
      <form className="loginForm" onSubmit={OtpWorks} >
         
        <h2>Otp Verification </h2>
        <br></br>
        <label className="otp-label">Otp:</label>
        <input 
          type="number"
          name="otp"
          placeholder="Otp"
          value={otp.otp}
          onChange={handleChangeForOtp}
          required
        />
        
        <br></br>
        <button type="submit"
        >
          Verify
        </button>
        <br></br><br></br>
  
        <Link to={"/signup"}>Re-Enter Details!</Link>
      </form>
   );
}
export default OtpVerification;