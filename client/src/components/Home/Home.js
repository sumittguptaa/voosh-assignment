import React from 'react'
import './Home.css'
import {
  
  useHistory,
  Link
} from "react-router-dom";
import { useDispatch } from 'react-redux'
import { getPost } from '../../actions/orders';

function Home() {
  const dispatch = useDispatch();
  const history = useHistory();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
  };

  const user = JSON.parse(localStorage.getItem("profile"));
   dispatch(getPost(user?.result?._id));
  return !user ? (
    <div className="auth-form-container">
      <div className="details">
        Please login to see your details
        <Link to={"/auth"}>
          <div style={{margin: '10px 0'}} >Login</div>
        </Link>
      </div>
    </div>
  ) : (
    <div className="auth-form-container">
      <div className="details">
        <div>Hi! {user.result.name}</div>
        <div>Phone Number {user.result.phoneNumber}</div>
        <div>Welcome to the dashboard</div>
      </div>
      <div className="order-buttons">
        <Link className="order-buttons-link" to={"/add-orders"}>
          <button>Add Orders</button>
        </Link>
        <Link to={"/orders"}>
          <button>Orders</button>
        </Link>
      </div>

      <button onClick={logout}>Log out</button>
    </div>
  );
}

export default Home
