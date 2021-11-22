import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import DataChart from './pages/Data_chart';
import DataQuery from './pages/Data_query';
import Help from './pages/Help';
import Contact from './pages/Contact';
import Setting from './pages/Setting';
import './App.css';
import Login from './pages/Login';
import socket from './service/Socket';
import React, {useState} from 'react';


function App() {
  const [mqttState,setMqttState] = useState("false");
        socket.on('mqttState', (data) => {
            setMqttState(data);
          })
    
  return (
    <>
      <Router>
            <Switch>
              <Route path='/' exact component={Login} />
              <Route path='/home' render={ () => {
                return sessionStorage.getItem('accessAdmin') || sessionStorage.getItem('accessUser') ?<Home mqttState = {mqttState} />: <Redirect to='/'/>
              }}/>
              <Route path='/data_chart' render={ () => {
                return sessionStorage.getItem('accessAdmin')?<DataChart mqttState = {mqttState}/>: <Redirect to='/'/>
              }}/>
              <Route path='/data_query' render={ () => {
                return sessionStorage.getItem('accessAdmin')?<DataQuery mqttState = {mqttState}/>: <Redirect to='/'/>
              }}/>
              <Route path='/setting' render={ () => {
                return sessionStorage.getItem('accessAdmin')?<Setting mqttState = {mqttState} />: <Redirect to='/'/>
              }}/>
              <Route path='/help' render={ () => {
                return sessionStorage.getItem('accessAdmin') || sessionStorage.getItem('accessUser')?<Help mqttState = {mqttState} />: <Redirect to='/'/>
              }}/>
              <Route path='/contact' render={ () => {
                return sessionStorage.getItem('accessAdmin') || sessionStorage.getItem('accessUser')?<Contact mqttState = {mqttState} />: <Redirect to='/'/>
              }}/>
            </Switch>
      </Router>
    </>
  )
}

export default App;
