import React, { useState } from "react";
import axios from "axios";

const Activate = () =>{

    const [user, setUser] = useState({
        activatemail: ""
      });

const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,

      [name]: value,
    });
  };

  const onactivate = () => {
    const { activatemail } = user;
    if (activatemail) {
      axios.post("http://localhost:9005/activate", user).then((res) => {
    
      });
    } else {
      alert("not posted");
    }
  };



    return (<div>
        <h1>Hello</h1>
        <form>
        <input
          type="text"
          name="activatemail"
          placeholder="Enter Phone Number"
          onChange={handleChange}
        />
        <br/>
        <input type="button" value="CREATE ACCOUNT" onClick={onactivate} />
        </form>
    </div>
)}

export default Activate;