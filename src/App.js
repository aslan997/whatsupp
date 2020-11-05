
import './App.css';
import Sidebar from './Sidebar';
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React,{ useState } from 'react';
import Login from "./Login";
import {useStateValue} from "./StateProvider";

function App() {
  
  //BEM naming convention
  const [{user}, dispatch] = useStateValue();
  return (<div className="app">
    {!user ? <Login/> : (
      <div className="app_body">
        {/* SideBar */}
        {/* CHAT */}
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </Router>
      </div>
    )}
  </div>
  );
}

export default App;
