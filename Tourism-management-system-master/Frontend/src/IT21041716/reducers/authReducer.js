import { authConstants } from "../actions/constants";

const initState ={
    user: {},
    authenticated: false,
    authenticating: false,
    loading: false,

}

export default(state =initState,action) => {
    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true
            }
        break
        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                authenticating: false,
                authenticated:true,
                user:action.payload.user
            }
        break
        case authConstants.LOGIN_FALIURE:
            state = {
                ...state,
                authenticating: false,
            }
        break
        case authConstants.SIGN_UP_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break
        case authConstants.SIGN_UP_SUCCESS:
            state = {
                ...state,
                loading: false,
                user: action.payload,
                sellers: action.payload
            }
        break
        case authConstants.SIGN_UP_FAILURE:
            state = {
                ...state,
                loading: false,
            }
        break
        case authConstants.LOGOUT_REQUEST:
            state={
                ...state,
                loading:true
            }
        break

        case authConstants.LOGOUT_SUCCESS:
            state={
                ...initState
  
            }
        break
        case authConstants.LOGOUT_FAILED:
            state={
                ...state,
                loading:false
            }
        break
        case authConstants.UPDATE_REQUEST:
            state={
                ...state,
                loading:true
            }
        break

        case authConstants.UPDATE_SUCCESS:
            state={
                ...state,
                loading:false,
                user: action.payload
  
            }
        break
        case authConstants.UPDATE_FALIURE:
            state={
                ...state,
                loading:false
            }
        break
        case authConstants.GET_SELLER_REQUEST:
            state={
                ...state,
                loading:true
            }
        break

        case authConstants.GET_SELLER_SUCCESS:
            state={
                ...state,
                loading:false,
                user: action.payload
  
            }
        break
        case authConstants.GET_SELLER_FALIURE:
            state={
                ...state,
                loading:false
            }
        break
        case authConstants.UPDATE_DP_REQUEST:
            state={
                ...state,
                loading:true
            }
        break

        case authConstants.UPDATE_DP_SUCCESS:
            state={
                ...state,
                loading:false,
                user: action.payload
  
            }
        break
        case authConstants.UPDATE_DP_FALIURE:
            state={
                ...state,
                loading:false
            }
        break
        case authConstants.UPDATE_GELLARY_REQUEST:
            state={
                ...state,
                loading:true
            }
        break

        case authConstants.UPDATE_GELLARY_SUCCESS:
            state={
                ...state,
                loading:false,
                user: action.payload
  
            }
        break
        case authConstants.UPDATE_GELLARY_FALIURE:
            state={
                ...state,
                loading:false
            }
        break
        case authConstants.UPDATE_PWD_REQUEST:
            state={
                ...state,
                loading:true
            }
        break

        case authConstants.UPDATE_PWD_SUCCESS:
            state={
                ...state,
                loading:false,
                user: action.payload
  
            }
        break
        case authConstants.UPDATE_PWD_FALIURE:
            state={
                ...state,
                loading:false
            }
        break
        case authConstants.DELETE_REQUEST:
            state={
                ...state,
                loading:true
            }
        break

        case authConstants.DELETE_SUCCESS:
            state={
                ...initState
  
            }
        break
        case authConstants.DELETE_FALIURE:
            state={
                ...state,
                loading:false
            }
        break

    }
    return state
}