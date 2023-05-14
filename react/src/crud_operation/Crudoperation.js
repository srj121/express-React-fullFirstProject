import React, { useState, useEffect } from "react";
import DeletByName from "./DeleteByName";
import GetByName from "./GetByName";
import GetByAge from "./GetByAge";
import AddUser from "./AddUser";
import DeletById from "./DeleteById";
import Usericon from "./userIcon";
import Reconnect from "./reconnect";
import { BASEURL, BASEURLONLINE } from "../url";


function Crudoperation() {
    const [data, setData] = useState([]);
    

    useEffect(() => {
    getData()
}, [data.length]);


const getData = async () => {
    fetch(BASEURLONLINE)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error(error));    

}
    return(
        <>
         <Usericon />
        <div className="all-user"><h1> All Users </h1></div>
        <div className="home_component">
            <table >  
                    <thead className="main-td">
                        <tr >
                            <th>ID</th>
                            <th>NAME</th>
                            <th>AGE</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map(item => (
                        <tr  key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                        ))}
                        </tbody>
                </table>
                     
        </div>
        <Reconnect/>
                <div className="rest_of_component">
                <GetByName/>
                 <GetByAge/>
                 <AddUser userData={ data } setUserData={ setData }/>   
                <DeletById userData={ data } setUserData={ setData }/>
                <DeletByName userData={ data } setUserData={ setData }/>
                   {/* <!-- Rounded switch -->
<label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label> */}
                </div>
                </>
    );
}

export default Crudoperation;