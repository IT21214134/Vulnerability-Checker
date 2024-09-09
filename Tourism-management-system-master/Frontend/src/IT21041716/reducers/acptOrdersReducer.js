import { acptOrderConstants } from "../actions/constants"

const initState ={
    orders: [],
    Getacptorders:[],
    loading: false,

}

export default(state =initState,action) => {
    switch(action.type){
        case acptOrderConstants.ACPT_ORDER_REQUEST:
            state = {
                ...state,
                loading: true
            }
        break
        case acptOrderConstants.ACPT_ORDER_SUCCESS:
            state = {
                ...state,
                loading: false,
                orders:action.payload
            }
        break
        case acptOrderConstants.ACPT_ORDER_FAILURE:
            state = {
                ...state,
                loading: false,
            }
        break
        case acptOrderConstants.GET_ACPT_ORDER_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break
        case acptOrderConstants.GET_ACPT_ORDER_SUCCESS:
            state = {
                ...state,
                loading: false,
                Getacptorders: action.payload
           
            }
        break
        case acptOrderConstants.GET_ACPT_ORDER_FAILURE:
            state = {
                ...state,
                loading: false,
            }
        break
        case acptOrderConstants.DELETE_ORDER_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break
        case acptOrderConstants.DELETE_ORDER_SUCCESS:
            state = {
                ...state,
                loading: false,
                Getacptorders: action.payload
           
            }
        break
        case acptOrderConstants.DELETE_ORDER_FAILURE:
            state = {
                ...state,
                loading: false,
            }
        break
        
       

    }
    return state
}