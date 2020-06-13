import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeA from './components/home'
import HomeU from './components/home-user'
import HomeG from './components/home-guest'


import Navbar from './components/navbar'
import Addproduct from "./components/addproduct"
import Login from "./components/login"
import { connect } from 'react-redux'
import { Switch, Route} from 'react-router-dom'

let a=""
class App extends Component {
  state={
    isAdmin:false
  }
 
 
  
  render(){
  return (

    <div className="App">
      <Switch>
      <Route exact path='/'> 
      <Navbar  />
      <HomeG/>
      </Route>
      <Route path='/user'> 
      <Navbar  />
      <HomeU />
      </Route>
      <Route path='/admin'> 
      <Navbar  />
      <Addproduct />
      <HomeA />
      </Route>
      <Route path='/login'> 
      <Login passname={this.passname} />
      </Route>
      </Switch>
    </div>

  );
  }
}
const mapStateToProps=(state)=>({
  users:state.users
})


export default connect(mapStateToProps,null)(App);
