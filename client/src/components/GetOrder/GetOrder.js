import React from 'react'
import { useDispatch } from "react-redux";
import { getPost } from '../../actions/orders';
import './GetOrder.css'
function GetOrder() {
    const user = JSON.parse(localStorage.getItem("profile"));
    const dispatch = useDispatch();
    const id = user?.result?._id;

 dispatch(getPost(id));

    const data = JSON.parse(localStorage.getItem("order"));

  return user && data.length === 0 ? (
    <div className="auth-form-container">No Orders Found !</div>
  ) : (
   user && <div className="auth-form-container">
      <h2>Your Orders are</h2>
      {data.map((d, idx) => (
        <div className="orders-container" key={idx}>
          <span>Order No.{idx}</span>
          <div>Phone Number {d.phoneNumber}</div>

          <div>Subtotal {d.subTotal}</div>
        </div>
      ))}
    </div>
  );
}

export default GetOrder