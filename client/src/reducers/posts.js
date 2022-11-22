import {  CREATE, FETCH_ORDER } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {  orders: [] }, action) => {
    switch (action.type) {
       
        case FETCH_ORDER:
         localStorage.setItem("order",JSON.stringify(action.payload.data))
            return { ...state, order: action.payload.data };
       
        case CREATE:
            return { ...state, order: [...state.orders, action.payload] };
      
        default:
            return state;
    }
};