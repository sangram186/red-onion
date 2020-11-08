import React, { createContext, useState } from 'react';
import './App.css';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom';
import FoodItemPage from './component/FoodGalary/FoodItemPage';
import Login from './component/Login/Login';
import Header from './component/Header/Header';
import Delivery from './component/Delivery/Delivery';
import PrivateRoute from './component/PrivateRoute';
import SignUp from './component/SignUp/SignUp';

export const countContext = createContext();
function App() {
  const [order, setOrder] = useState(0);
  const [count, setCount] = useState(1);
  const [user, setUser] = useState({})
  return (
    <countContext.Provider value={{foodCount : [count, setCount], foodOrder: [order, setOrder], foodBuyer: [user, setUser]}}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/sign-up'>
            <SignUp />
          </Route>
          <Route path='/foodItem/:id'>
            <FoodItemPage></FoodItemPage>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/delivery'>
            <Delivery></Delivery>
          </PrivateRoute>
        </Switch>
      </Router>
      
      </countContext.Provider>
  );
}

export default App;
