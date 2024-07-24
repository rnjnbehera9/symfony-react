import React, {  useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import "./index.css";
import { getUsers } from './service';

const Login = () => {
    const navigate = useNavigate();  
  
    useEffect(() => {
        localStorage.setItem("userinfo", '');
      
      }, []);
    // React States
     const [isSubmitted, setIsSubmitted] = useState(false);
     const [uname, setUname] = useState([]);
     const [pass, setPass] = useState([]);
     const navigateToMovies = () => {
      // 👇️ navigate to /contacts
      navigate('/movies');
    };

    
     const handleSubmit = async (event) => {
       //Prevent page reload
       event.preventDefault();
    
       // Find user login info
          const response = await getUsers({
            "email": uname,
            "pass": pass
        });
          
       // Compare user info
       if (response.data.length >0) {
        localStorage.setItem("userinfo", response.data);
         setIsSubmitted(true);
       }else{
        localStorage.setItem("userinfo", '');
         setIsSubmitted(false);
       } 
     };
    

    
     // JSX code for login form
     const renderForm = (
       <div className="form">
         <form onSubmit={handleSubmit}>
           <div className="input-container">
             <label>Username </label>
             <input type="text" name="uname" value={uname} onChange={(e) => setUname(e.target.value)} required />
            
           </div>
           <div className="input-container">
             <label>Password </label>
             <input type="password" name="pass" value={pass} onChange={(e) => setPass(e.target.value)} required />
            
           </div>
           <div className="button-container">
             <input type="submit" />
           </div>
         </form>
       </div>
     );
    
     return (
       <div className="app">
         <div className="login-form">
           <div className="title">Sign In</div>
           {isSubmitted ?      
          
              <div >          
              {navigateToMovies()}
                </div>
    
           : renderForm}
         </div>
       </div>
     );
}

export default Login