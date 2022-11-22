
import './App.css';
import { BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
import React from "react"

import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import AddOrder from './components/AddOrder/AddOrder';
import GetOrder from './components/GetOrder/GetOrder';

function App() {
  const user = JSON.parse(localStorage.getItem('profile'))
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/orders"
          exact
          component={GetOrder}
        />
        <Route path="/add-orders" exact component={AddOrder} />
        <Route
          path="/auth"
          exact
          component={() => (!user ? <Auth /> : <Redirect to="/" />)}
        />
      </Switch>
    </Router>
  );
}

export default App;
