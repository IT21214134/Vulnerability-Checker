import { authConstants } from "./constants";
import { toast } from 'react-hot-toast'
import { axiosInstance } from "../helpers/axios";


export const Login = (data) => {
    return async (dispatch) => {
        try {
            dispatch({ type: authConstants.LOGIN_REQUEST })
            const res = await axiosInstance.post('/Seller/Signin', data)
            if (res.status === 200) {
                const user = res.data.payload
                const token = res.data.token
                const id = res.data.payload.Seller_ID
                localStorage.setItem("token", token);
                localStorage.setItem("Seller_ID", id);
                localStorage.setItem("user", JSON.stringify(user));

                toast.success(`Login Success, Welcome ${user.Personal_name} `, {
                    id: "login"
                })

                dispatch({
                    type: authConstants.LOGIN_SUCCESS,
                    payload: {
                        user,
                        token
                    }
                })

            }
            else if (res.status === 401) {
                toast.error("Invalid Password..!")
                dispatch({
                    type: authConstants.LOGIN_FALIURE
                })
            }

            else if (res.status === 404) {
                toast.error("Invalid Email Address..!")
                dispatch({
                    type: authConstants.LOGIN_FALIURE
                })
            }


        } catch (error) {
            console.log(error)
        }


    }
}


export const SignUp = (user, log) => {
    console.log("Action eke " + user.ProfilePicture)
    return async (dispatch) => {

        try{
            dispatch({ type: authConstants.SIGN_UP_REQUEST })
            const res = await axiosInstance.post('/Seller/Signup', user)
            if (res.status === 201) {
                const email = log.Company_email
                const pwd = log.Password
                const form3 = {
                    Company_email: email,
                    Password: pwd
                }
                console.log(form3)
                dispatch(Login(form3))
                dispatch({
                    type: authConstants.SIGN_UP_SUCCESS,
                    payload: res.data.payload
                })
            }
    
    
    
            else {
                if (res.status === 401) {
                    toast.error("Somthing Went Wrong In Account Creating..!")
                    dispatch({
                        type: authConstants.SIGN_UP_FAILURE,
                        payload: res.error
                    })
                }
    
                else if (res.status === 400) {
                    toast.error("Email Already Registered...!")
                    dispatch({
                        type: authConstants.SIGN_UP_FAILURE
                    })
                }
            }
        }catch(error){
            if (res.status === 500) {
                toast.error("Server crashed..!")
                dispatch({
                    type: authConstants.SIGN_UP_FAILURE,
                })
            }
        }

    }
}

export const signout = () => {
    return async (dispatch) => {
        dispatch({ type: authConstants.LOGOUT_REQUEST })
        localStorage.clear();

        toast.success("Logout successfull..!", {
            id: "logout"
        })
        dispatch({
            type: authConstants.LOGOUT_SUCCESS
        })


    }
}

export const isLoggedIn = () => {
    return async (dispatch) => {
        const token = localStorage.getItem("token");
        if (token) {
            const user = JSON.parse(localStorage.getItem('user'))
            if (user) {
                dispatch({
                    type: authConstants.LOGIN_SUCCESS,
                    payload: {
                        token,
                        user
                    }
                })
            }

        } else {
            dispatch({
                type: authConstants.LOGIN_FALIURE,
                payload: { error: 'Failed to login' }
            })
        }
    }
}


export const updateSeller =(details) => {
    return async dispatch =>{
        dispatch({type:authConstants.UPDATE_REQUEST})
        const res = await axiosInstance.post('/Seller/update',details)
        if(res.status === 201){
            toast.success("Data Updated...");
            dispatch({
                type:authConstants.UPDATE_SUCCESS,
                payload:res.data.payload[0]
            })
        }
        else if(res.status === 400 ||  res.status === 500 ){
            toast.error("Update Failed...");
            dispatch({
                type:authConstants.UPDATE_FALIURE,
            })
        }
    }
}


export const updateDp =(data) => {
    console.log(data)
    return async dispatch =>{
        dispatch({type:authConstants.UPDATE_DP_REQUEST})
        const res = await axiosInstance.post('/Seller/updateDP',data)
        if(res.status === 201){
            toast.success("Profile picture Updated...");
            dispatch({
                type:authConstants.UPDATE_DP_SUCCESS,
                payload:res.data.payload[0]
            })
        }
        else if(res.status === 400 ||  res.status === 500 ){
            toast.error("Update Failed...");
            dispatch({
                type:authConstants.UPDATE_DP_FALIURE,
            })
        }
    }
}


export const updatePswd =(data) => {
    console.log(data)
    return async dispatch =>{
        try{
            dispatch({type:authConstants.UPDATE_PWD_REQUEST})
            const res = await axiosInstance.post('/Seller/updatepwd',data)
            if(res.status === 201){
                toast.success("Password  Updated...");
                dispatch({
                    type:authConstants.UPDATE_PWD_SUCCESS,
                    payload:res.data.payload[0]
                })
            }
            else if(res.status === 400){
                toast.error("Update Failed...");
                dispatch({
                    type:authConstants.UPDATE_PWD_FALIURE,
                })
            }
        }catch(error){
            res.status(500).json({
                message: "Somthing Went Wrong..!",
                error: error
              })
        }

    }
}


export const updateGallery =(data) => {
    console.log(data)
    return async dispatch =>{
        dispatch({type:authConstants.UPDATE_GELLARY_REQUEST})
        const res = await axiosInstance.post('/Seller/updateImages',data)
        if(res.status === 201){
            toast.success("Profile picture Updated...");
            dispatch({
                type:authConstants.UPDATE_GELLARY_SUCCESS,
                payload:res.data.payload[0]
            })
        }
        else if(res.status === 400 ||  res.status === 500 ){
            toast.error("Update Failed...");
            dispatch({
                type:authConstants.UPDATE_GELLARY_FALIURE,
            })
        }
    }
}


export const fetchSeller =(id)=>{
    return async dispatch =>{
        
        dispatch({type:authConstants.GET_SELLER_REQUEST});
        const res = await axiosInstance.post('/Seller/getSeller', id)
        if(res.status === 200){
            toast.success("Seller Details Here...", {id: 'inqFetchS'})
            dispatch({
                type:authConstants.GET_SELLER_SUCCESS,
                payload: res.data.payload[0]
            })
        }
        if(res.status === 404 || res.status ===500){
            toast.error("Seller Details Fetch Failed...", {id: 'inqFetchF'})
            dispatch({
                type:authConstants.GET_SELLER_FALIURE
            })
        }
    }
}

export const deleteSeller = (id) => {
    const form ={
        Seller_ID:id
    }
    return async dispatch => {

        try{
            dispatch({
                type:authConstants.DELETE_REQUEST
            })
    
            const res = await axiosInstance.post('/Seller/deleteSeller',form);
    
            if(res.status === 200){
                Swal.fire(
                    'Deleted!',
                    'Your entry has been deleted.',
                    'success'
                )
                dispatch({
                    type:authConstants.DELETE_SUCCESS,
                    payload:res.data.payload
                })
                localStorage.clear();
            }
            else if(res.status === 400){
                toast.error(" Delete Failed");
                dispatch({
                    type:authConstants.DELETE_FALIURE
                })
            }
        }catch(error){
            res.status(500).json({
                message: "Somthing Went Wrong..!"})
              dispatch({
                type:authConstants.DELETE_FALIURE
            })
        }
        
    }
}

