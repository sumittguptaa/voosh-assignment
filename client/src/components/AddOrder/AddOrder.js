import React,{useState} from 'react'
import {
  
  useHistory,

} from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPost } from '../../actions/orders';

function AddOrder() {
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem("profile"));
    const initialState = { user_id: user.result._id, phoneNumber: "", subTotal: "" };
    const [formdata, setFormData] = useState(initialState);
    
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formdata)
    
        dispatch(createPost(formdata, history));
   
    };
    const handleChange = (e) => {
      setFormData({ ...formdata, [e.target.name]: e.target.value });
    };
    
    
  return (
    <div>
      <div>
        <div className="auth-form-container">
          <h2>Add Orders</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="id">Id</label>
            <input
            
              value={user.result._id}
              id="id"
              name="id"
            />

            <label htmlFor="subTotal">Subtotal</label>
            <input
              onChange={handleChange}
              type="number"
              placeholder="0"
              id="subTotal"
              name="subTotal"
            />

            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              onChange={handleChange}
              type="number"
              placeholder="98********"
              id="phoneNumber"
              name="phoneNumber"
            />
            <button type="submit">Add Orders</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddOrder