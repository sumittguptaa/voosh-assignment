import * as api from '../api';
import {CREATE,FETCH_ORDER,} from '../constants/actionTypes'
export const getPost = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchPost(id)
        console.log(data);
        
        dispatch({ type: FETCH_ORDER, payload: data });
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (post,history)=> async (dispatch)=>{ 
    try {
        const { data } = await api.createPost(post)
        history.push('/')
        dispatch({type : CREATE,payload : data})

        
    } catch (error) {
     console.log(error)   
    }
}
