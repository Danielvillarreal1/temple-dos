import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch, BrowserRouter} from "react-router-dom";
import Navbar from './components/navbar';
import Dashboar from './components/dashboard';
import Footer from './components/footer';
import Main from './components/main';
import Login from './components/login';
import Register from './components/register';
import Password from './components/password';

function App() {
  return (
    <>

<Router>
<div class="">
      <Navbar />
       </div>

      <div className="row">

       <div className="col-2">  
       <Dashboar />
       </div>
       <div className="col-10">
       <Main />
       </div>

       </div>
     
        
        <Switch>

          
          
          <Route exact path="/login" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Password" component={Password} />

          
        </Switch>

        <Footer />
      </Router>


  </>

  );
}

export default App;
