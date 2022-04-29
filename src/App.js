import React, { Component } from 'react';
import NavBar from './components/navbar';
import './index.css';
import { Routes, Route } from 'react-router-dom'
import Home from './screens/home';
import Projects from './screens/projects';
import Gif from './screens/gif';

class App extends Component {
  
  render() {
    return (
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/projects' element={ <Projects /> } />
          <Route path='/gif' element={ <Gif /> } />
        </Routes>
    )
  }

}

export default App;
