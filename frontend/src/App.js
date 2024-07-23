import './App.css';
import React from 'react';
import MovieList from './MovieList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MovieList/>} />
            </Routes>
        </Router>
    );
}

export default App;
