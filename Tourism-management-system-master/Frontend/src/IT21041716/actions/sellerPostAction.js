import { PostConstants } from "./constants";
import { toast } from 'react-hot-toast'
import { axiosInstance } from "../helpers/axios";
import Swal from 'sweetalert2';

export const AddTrip = (data) => {
    console.log(data)
    return async (dispatch) => {

        try {
            dispatch({ type: PostConstants.ADD_POST_REQUEST })
            const res = await axiosInstance.post('SellerPost/AddnewPost', data)
            if (res.status === 201) {
                toast.success("New trip plan added...!", {
                    id: "placesuccs"
                })
                dispatch({
                    type: PostConstants.ADD_POST_SUCCESS,
                    payload: res.data.payload
                })
            } else if (res.status === 401) {
                toast.error("Somthing went wrong in order adding..!", {
                    id: "401"
                })
                dispatch({
                    type: PostConstants.ADD_POST_FAILURE
                })
            }

        } catch (error) {
            if (res.status === 500) {
                toast.error("Server error..!", {
                    id: "500p"
                })
                dispatch({
                    type: PostConstants.ADD_POST_FAILURE
                })
            }
        }

    }
}

export const updateImages =(data) => {
    console.log(data)
    return async dispatch =>{
    try{
        dispatch({type:PostConstants.UPDATE_IMAGES_REQUEST})
        const res = await axiosInstance.post('/SellerPost/updateImages',data)
        if(res.status === 201){
            toast.success("Images added...");
            dispatch({
                type:PostConstants.UPDATE_IMAGES_SUCCESS,
                payload:res.data.payload[0]
            })
        }
        else if(res.status === 400 ){
            toast.error("adding Failed...");
            dispatch({
                type:PostConstants.UPDATE_IMAGES_FAILURE,
            })
        }
    }catch(error){
        res.status(500).json({
            message: "Somthing Went Wrong..!"})
          dispatch({
            type:PostConstants.UPDATE_IMAGES_FAILURE
        })
    }
   
       
    }
}

export const getAllPosts =(data) => {
    console.log(data)
    return async dispatch =>{
    try{
        dispatch({type:PostConstants.GET_ALL_REQUEST})
        const res = await axiosInstance.post('/SellerPost/getPost',data)
        console.log(res)
        if(res.status === 200){
            toast.success("Posts Fetched ...",{
                id:"fetch"
            });
            dispatch({
                type:PostConstants.GET_ALL_SUCCESS,
                payload:res.data.payload
            })
        }
        else if(res.status === 404 ){
            toast.error("fetching Failed...",{
                id:"failed400"
            });
            dispatch({
                type:PostConstants.GET_ALL_FALIURE,
            })
        }
    }catch(error){
        res.status(500).json({
            message: "Somthing Went Wrong..!"})
          dispatch({
            type:PostConstants.GET_ALL_FALIURE
        })
    }
   
       
    }
}
export const deletePost =(data) => {
    console.log(data)
    return async dispatch =>{
    try{
        dispatch({type:PostConstants.DELETE_POST_REQUEST})
        const res = await axiosInstance.post('/SellerPost/deletePost',data)
        console.log(res)
        if(res.status === 200){
            Swal.fire(
                'Deleted!',
                'Your entry has been deleted.',
                'success'
            )
            dispatch({
                type:PostConstants.DELETE_POST_SUCCESS,
                payload:res.data.payload
            })
        }
        else if(res.status === 400 ){
            toast.error("deleting Failed...",{
                id:"failed400"
            });
            dispatch({
                type:PostConstants.DELETE_POST_FALIURE,
            })
        }
    }catch(error){
        res.status(500).json({
            message: "Somthing Went Wrong..!"})
          dispatch({
            type:PostConstants.GET_ALL_FALIURE
        })
    }
   
       
    }
}

export const getOnePost =(data) => {
    console.log(data)
    return async dispatch =>{
    try{
        dispatch({type:PostConstants.GET_ONE_REQUEST})
        const res = await axiosInstance.post('/SellerPost/onepost',data)
        console.log(res)
        if(res.status === 200){
            toast.success("Posts Fetched ...",{
                id:"fetch"
            });
            dispatch({
                type:PostConstants.GET_ONE_SUCCESS,
                payload:res.data.payload[0]
            })
        }
        else if(res.status === 404 ){
            toast.error("fetching Failed...",{
                id:"failed400"
            });
            dispatch({
                type:PostConstants.GET_ONE_FALIURE,
            })
        }
    }catch(error){
        res.status(500).json({
            message: "Somthing Went Wrong..!"})
          dispatch({
            type:PostConstants.GET_ONE_FALIURE
        })
    }
   
       
    }
}

export const clientAll =(data) => {
    console.log(data)
    return async dispatch =>{
    try{
        dispatch({type:PostConstants.CLIENT_REQUEST})
        const res = await axiosInstance.get('/SellerPost/getAll')
        console.log(res)
        if(res.status === 200){
            toast.success("Posts Fetched ...",{
                id:"fetch"
            });
            dispatch({
                type:PostConstants.CLIENT_SUCCESS,
                payload:res.data.payload
            })
        }
        else if(res.status === 404 ){
            toast.error("fetching Failed...",{
                id:"failed400"
            });
            dispatch({
                type:PostConstants.CLIENT_FALIURE,
            })
        }
    }catch(error){
        res.status(500).json({
            message: "Somthing Went Wrong..!"})
          dispatch({
            type:PostConstants.CLIENT_FALIURE
        })
    }
   
       
    }
}



