import './App.css';
import React from 'react';
import MovieList from './MovieList';
import { BrowserRouter as Router, Route, Routes , useLocation} from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar';


function App() {
    const location = useLocation();
    const showHome = location.pathname === '/';
    return (
        <>
       
        {
          !showHome && (
            <> 
            <Navbar/>
         
            </>
          )
        }
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/movies" element={<MovieList/>} />
            </Routes>
      
    </>    
    );
}

export default App;
