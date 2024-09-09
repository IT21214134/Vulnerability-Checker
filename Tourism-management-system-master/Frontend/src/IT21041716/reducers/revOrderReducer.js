import { revOrderConstants } from "../actions/constants"

const initState ={
    orders: [],
    getorders:[],
    loading: false,

}

export default(state =initState,action) => {
    switch(action.type){
        case revOrderConstants.PLACE_ORDER_REQUEST:
            state = {
                ...state,
                loading: true
            }
        break
        case revOrderConstants.PLACE_ORDER_SUCCESS:
            state = {
                ...state,
                loading: false,
                orders:action.payload
            }
        break
        case revOrderConstants.PLACE_ORDER_FAILURE:
            state = {
                ...state,
                loading: false,
            }
        break
        case revOrderConstants.GET_ORDER_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break
        case revOrderConstants.GET_ORDER_SUCCESS:
            state = {
                ...state,
                loading: false,
                getorders: action.payload
           
            }
        break
        case revOrderConstants.GET_ORDER_FAILURE:
            state = {
                ...state,
                loading: false,
            }
        break
        case revOrderConstants.DELETE_ORDER_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break
        case revOrderConstants.DELETE_ORDER_SUCCESS:
            state = {
                ...state,
                loading: false,
                getorders: action.payload
           
            }
        break
        case revOrderConstants.DELETE_ORDER_FAILURE:
            state = {
                ...state,
                loading: false,
            }
        break
       

    }
    return state
}