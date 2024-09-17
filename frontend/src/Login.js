import React, {  useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import "./index.css";
import { getUsers } from './service';

const Login = () => {
    const navigate = useNavigate();  
    // React States
    const [uname, setUname] = useState([]);
    const [pass, setPass] = useState([]);
    const [err, setErr] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    useEffect(() => {
        localStorage.setItem("userinfo", '');
        setIsSubmitted(false);
        setUname([])
        setPass([])
        setErr([])
      }, []);

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
       if (response.length >0) {
        setErr([]);
        localStorage.setItem("userinfo", response);
         setIsSubmitted(true);
       }else{
        setErr(response);
        localStorage.setItem("userinfo", '');
         setIsSubmitted(false);
       } 
     };
    

    
     // JSX code for login form
     const renderForm = (
       <div className="form">
        <div className="error">{err.error}</div>
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