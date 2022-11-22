import React ,{useState}from 'react'
import './Auth.css'
import {useDispatch} from "react-redux"
import { useHistory } from 'react-router-dom'
import {signin,signup} from "../../actions/auth"
const initialState = {name:"",phoneNumber: "",password: ""}
function Auth() {
    const history = useHistory()
    const [formdata,setFormData]= useState(initialState)
    const [isSignup,setIssignup] = useState(true);
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        if(isSignup){
            dispatch(signup(formdata,history))
        }else{
            dispatch(signin(formdata, history))
        }
    }
    const handleChange = (e) => {
        setFormData({...formdata,[e.target.name] : e.target.value})
    }
    const switchMode = () =>{
        setIssignup((sign)=> !sign)
        
    }
    return (
      
      <div className="auth">
        <div className="auth-form-container">
          <h2>{isSignup ? "Sign Up" : "Sign In"}</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              
              onChange={handleChange}
              type="number"
              placeholder="98********"
              id="phoneNumber"
              name="phoneNumber"
            />
            {isSignup && (
              <>
                <label htmlFor="name">name</label>
                <input
                 
                  onChange={handleChange}
                  type="name"
                  placeholder="XYZ"
                  id="name"
                  name="name"
                />
              </>
            )}
            <label htmlFor="password">password</label>
            <input
              
              onChange={handleChange}
              type="password"
              placeholder="********"
              id="password"
              name="password"
            />
            <button type="submit">{isSignup ? "Sign Up" : "Sign In"}</button>
          </form>
          <button className="link-btn" onClick={switchMode}>
            {isSignup
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    );
}

export default Auth
