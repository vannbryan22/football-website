import React from 'react';
import './css/style.css';
import {Route} from 'react-router-dom';
import Header from './components/Header';
import HeaderScoreBoard from './components/HeaderScoreBoard';
import Teams from './components/Teams';
import Home from './components/Home';
import ComingSoon from './components/ComingSoon';

function App() {

  return (
    <div className="app">

      <HeaderScoreBoard />
      <Header />

      {/* Home Route */}
      <Route path='/' exact strict>
        <Home />
      </Route>

      {/* Teams Route */}
      <Route path='/teams' exact strict>
        <Teams />
      </Route>

      {/* Tables Route */}
      <Route path='/tables' exact strict>
        <ComingSoon />
      </Route>
    </div>
  );
}

export default App;
