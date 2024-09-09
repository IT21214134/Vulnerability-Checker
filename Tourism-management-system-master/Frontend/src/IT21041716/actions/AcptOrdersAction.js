import {acptOrderConstants } from "./constants";
import {toast} from 'react-hot-toast'
import { axiosInstance } from "../helpers/axios";
import {deleteOrder} from '../actions/revOrderAction'

export const AcptOrder = (data)=> {
    console.log(data)
    const form ={
        Order_ID: data.Order_ID,
        Seller_ID: data.Seller_ID,
    }
    return async(dispatch) => {
        dispatch({type: acptOrderConstants.ACPT_ORDER_REQUEST})
        const res = await axiosInstance.post('/Accept/orderAccept', data)
        if(res.status === 201){
            toast.success("Order Accepted...!",{
                id:"placesuccs"
            })
            dispatch({
                type:acptOrderConstants.ACPT_ORDER_SUCCESS,
                payload:res.data.payload
            })
            dispatch(deleteOrder(form))
        }else{
            if(res.status === 401){
                toast.error("Somthing went wrong in order accepting..!",{
                    id:"401"
                })
                dispatch({
                    type:acptOrderConstants.ACPT_ORDER_FAILURE
                })
            }
            else if(res.status === 500){
                toast.error("Server error..!",{
                    id:"500p"
                })
                dispatch({
                    type:acptOrderConstants.ACPT_ORDER_FAILURE
                })
            }
        }
    }
}

export const getAcptOrders = (Seller_ID) => {
    const form ={
        Seller_ID:Seller_ID
    }
    return async (dispatch) => {
        dispatch({type: acptOrderConstants.GET_ACPT_ORDER_REQUEST})
        const res = await axiosInstance.post('/Accept/getAcptOrder',form)
        if(res.status === 200){
            toast.success("Data Fetched..!" ,{
                id: 'fet seccess'
            })
            dispatch({
                type:acptOrderConstants.GET_ACPT_ORDER_SUCCESS,
                payload:res.data.payload
            })
        }else{
            toast.error("Fetched error..!",{
                id: 'feterr'
            })
            dispatch({type:acptOrderConstants.GET_ACPT_ORDER_FAILURE})
        }
    }
}


export const deleteacptOrder = (data) => {

    console.log(data)
    return async (dispatch) => {
        dispatch({ type: acptOrderConstants.DELETE_ORDER_REQUEST})
        const res = await axiosInstance.post('/Accept/delete',data)
        if (res.status === 200) {
            dispatch({ 
                type:  acptOrderConstants.DELETE_ORDER_SUCCESS,
                payload: res.data.payload
            })
            

        } else if (res.status === 500) {
            toast.error("Order rejection failed..!", {
                id: "fail"
            })
            dispatch({
                type: acptOrderConstants.DELETE_ORDER_FAILURE,

            })
        } 
        
    }
}

