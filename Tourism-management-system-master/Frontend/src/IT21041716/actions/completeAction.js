import {completeConstants } from "./constants";
import {toast} from 'react-hot-toast'
import { axiosInstance } from "../helpers/axios";


export const CompleteOrder = (data)=> {
    console.log(data)
    return async(dispatch) => {
        dispatch({type: completeConstants.COMPLETE_ORDER_REQUEST})
        const res = await axiosInstance.post('/History/historyadd', data)
        if(res.status === 201){
            toast.success("Order Accepted...!",{
                id:"placesuccs"
            })
            dispatch({
                type:completeConstants.COMPLETE_ORDER_SUCCESS,
                payload:res.data.payload
            })
        }else{
            if(res.status === 401){
                toast.error("Somthing went wrong in order accepting..!",{
                    id:"401"
                })
                dispatch({
                    type:completeConstants.COMPLETE_ORDER_FAILURE
                })
            }
            else if(res.status === 500){
                toast.error("Server error..!",{
                    id:"500p"
                })
                dispatch({
                    type:completeConstants.COMPLETE_ORDER_FAILURE
                })
            }
        }
    }
}

export const getHistory = (Seller_ID) => {
    console.log(Seller_ID)
    const form ={
        Seller_ID:Seller_ID
    }
    return async (dispatch) => {
        dispatch({type: completeConstants.GET_COMPLETE_ORDER_REQUEST})
        const res = await axiosInstance.post('/History/getHistory',form)
        if(res.status === 200){
            toast.success("Data Fetched..!" ,{
                id: 'fet seccess'
            })
            dispatch({
                type:completeConstants.GET_COMPLETE_ORDER_SUCCESS,
                payload:res.data.payload
            })
        }else{
            toast.error("Fetched error..!",{
                id: 'feterr'
            })
            dispatch({type:completeConstants.COMPLETE_ORDER_FAILURE})
        }
    }
}
