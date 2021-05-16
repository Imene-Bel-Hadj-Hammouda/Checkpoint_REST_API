import axios from 'axios'
import { ADD_USER_FAILED, ADD_USER_LOADING, ADD_USER_SUCCESS, DELETE_USERS_FAILED, DELETE_USERS_LOADING, DELETE_USERS_SUCCESS, EDIT_USER_FAILED, EDIT_USER_LOADING, EDIT_USER_SUCCESS, GET_USERS_FAILED, GET_USERS_LOADING, GET_USERS_SUCCESS } from './types'
export const getUsers =()=>dispatch=>{
    dispatch({
        type:GET_USERS_LOADING
    })
    axios.get('/api/user')
    .then(({data})=>dispatch({
        type:GET_USERS_SUCCESS,
        payload:data
    }))
    .catch(err=>dispatch({
        type:GET_USERS_FAILED,
        payload: err.response.data.errors
    }))
}

export const deleteUser =(id)=>dispatch=>{
    dispatch({
        type:DELETE_USERS_LOADING
    })
    axios.delete(`/api/user/${id}`)
    .then(res=>dispatch({
        type:DELETE_USERS_SUCCESS,
        payload:res.data
    })
    )
    .catch(err=>dispatch({
        type:DELETE_USERS_FAILED,
        payload:err.response.data.errors
    }))
}

export const addUser =(newUser)=>dispatch=>{
    dispatch({
        type:ADD_USER_LOADING
    })
    axios.post('/api/user',newUser)
    .then(res=>dispatch({
        type:ADD_USER_SUCCESS,
        payload:res.data
    }))
    .catch(err=>dispatch({
        type:ADD_USER_FAILED,
        payload:err.response.data.errors
    }))
}

export const editUser= (id,updatedUsers)=> dispatch =>{
    dispatch({
        type:EDIT_USER_LOADING
    })
    axios.put(`/api/user/${id}`, updatedUsers)
    .then(res=>dispatch({
        type:EDIT_USER_SUCCESS,
        payload:res.data
    }))
    .catch(err=>dispatch({
        type:EDIT_USER_FAILED,
        payload:err.response.data.errors

    }))

}