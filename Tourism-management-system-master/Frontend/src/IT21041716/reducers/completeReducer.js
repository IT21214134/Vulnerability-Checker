import { completeConstants } from "../actions/constants"

const initState ={
    cmorders: [],
    Getcmorders:[],
    loading: false,

}

export default(state =initState,action) => {
    switch(action.type){
        case completeConstants.COMPLETE_ORDER_REQUEST:
            state = {
                ...state,
                loading: true
            }
        break
        case completeConstants.COMPLETE_ORDER_SUCCESS:
            state = {
                ...state,
                loading: false,
                cmorders:action.payload
            }
        break
        case completeConstants.COMPLETE_ORDER_FAILURE:
            state = {
                ...state,
                loading: false,
            }
        break
        case completeConstants.GET_COMPLETE_ORDER_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break
        case completeConstants.GET_COMPLETE_ORDER_SUCCESS:
            state = {
                ...state,
                loading: false,
                Getcmorders: action.payload
           
            }
        break
        case completeConstants.GET_COMPLETE_ORDER_FAILURE:
            state = {
                ...state,
                loading: false,
            }
        break
       

    }
    return state
}