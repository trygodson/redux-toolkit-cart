import { Home } from "../Home/Home.jsx";
import {Switch, BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Navbar from "../Navbar/Navbar.jsx";
import {Cart} from "../Cart/Cart.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import { ToastContainer } from "react-toastify";
import './ReactToastify.css';

export const App  = () => {
  return ( 
    
    <Router>
      <ToastContainer/>
      <Navbar/>
      <Switch>
        <Route path="/404" component={NotFound}/>
        <Route  path="/cart" component={Cart}/>
        <Route  path="/" exact component={Home}/>
        <Redirect to="/404"/>
      </Switch>
    </Router>
   );
}
 
