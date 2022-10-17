import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './layouts/Home.js';
import Header from './layouts/Header.js';
import Footer from './layouts/Footer.js';
import CreateTour from './tournament/CreateTour.js';
import FindTour from './tournament/FindTour.js';
import CreateTeam from './team/CreateTeam.js';
import FindTeam from './team/FindTeam.js';
import Login from './user/Login.js';
import Register from './user/Register.js';

function App() {
  return ( 
    <Router>
      <div>
        <Header />
          <div >    
            <Route path="/" component={Home} exact/>
            <Route path="/tour/create" component={CreateTour} exact/>
            <Route path="/tours" component={FindTour} exact/>
            <Route path="/team/create" component={CreateTeam} exact/>
            <Route path="/teams" component={FindTeam} exact/>
            <Route path="/login" component={Login} exact/>
            <Route path="/register" component={Register} exact/>
          </div>       
        <Footer />
      </div>
    </Router>
  );
}

export default App;
