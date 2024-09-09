import {revOrderConstants } from "./constants";
import {toast} from 'react-hot-toast'
import { axiosInstance } from "../helpers/axios";
import Swal from "sweetalert2";

export const NewOrder = (data)=> {
    console.log(data)
    return async(dispatch) => {
        dispatch({type: revOrderConstants.PLACE_ORDER_REQUEST})
        const res = await axiosInstance.post('/Orders/addorder', data)
        if(res.status === 201){
            toast.success("Order Placed...!",{
                id:"placesuccs"
            })
            dispatch({
                type:revOrderConstants.PLACE_ORDER_SUCCESS,
                payload:res.data.payload
            })
        }else{
            if(res.status === 401){
                toast.error("Somthing went wrong in order placing..!",{
                    id:"401"
                })
                dispatch({
                    type:revOrderConstants.PLACE_ORDER_FAILURE
                })
            }
            else if(res.status === 500){
                toast.error("Server error..!",{
                    id:"500p"
                })
                dispatch({
                    type:revOrderConstants.PLACE_ORDER_FAILURE
                })
            }
        }
    }
}

export const getOrders = (Seller_ID) => {
    const form ={
        Seller_ID:Seller_ID
    }
    return async (dispatch) => {
        dispatch({type: revOrderConstants.GET_ORDER_REQUEST})
        const res = await axiosInstance.post('/Orders/getOrder',form)
        if(res.status === 200){
            toast.success("Data Fetched..!" ,{
                id: 'fetch seccess'
            })
            dispatch({
                type:revOrderConstants.GET_ORDER_SUCCESS,
                payload:res.data.payload
            })
        }else{
            toast.error("Fetched error..!",{
                id: 'ferr'
            })
            dispatch({type:revOrderConstants.GET_ORDER_FAILURE})
        }
    }
}

export const deleteOrder = (data) => {

    console.log(data)
    return async (dispatch) => {
        dispatch({ type: revOrderConstants.DELETE_ORDER_REQUEST})
        const res = await axiosInstance.post('/Orders/deleteOrder',data)
        if (res.status === 200) {
            dispatch({ 
                type:  revOrderConstants.DELETE_ORDER_SUCCESS,
                payload: res.data.payload
            })
            

        } else if (res.status === 500) {
            toast.error("Order rejection failed..!", {
                id: "fail"
            })
            dispatch({
                type: revOrderConstants.DELETE_ORDER_FAILURE,

            })
        } 
        
    }
}
