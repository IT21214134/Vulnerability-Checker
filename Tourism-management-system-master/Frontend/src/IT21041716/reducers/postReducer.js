import { PostConstants} from "../actions/constants"

const initState ={
    posts: [],
    loading: false,
    onePost:{},
    allPost:[]

}

export default(state =initState,action) => {
    switch(action.type){
        case PostConstants.ADD_POST_REQUEST:
            state = {
                ...state,
                loading: true
            }
        break
        case PostConstants.ADD_POST_SUCCESS:
            state = {
                ...state,
                loading: false,
                posts:action.payload
            }
        break
        case PostConstants.ADD_POST_FAILURE:
            state = {
                ...state,
                loading: false,
            }
        break
        case PostConstants.DELETE_POST_REQUEST:
            state = {
                ...state,
                loading: true
            }
        break
        case PostConstants.DELETE_POST_SUCCESS:
            state = {
                ...state,
                loading: false,
                posts:action.payload
            }
        break
        case PostConstants.DELETE_POST_FALIURE:
            state = {
                ...state,
                loading: false,
            }
        break
        case PostConstants.GET_ALL_REQUEST:
            state = {
                ...state,
                loading: true
            }
        break
        case PostConstants.GET_ALL_SUCCESS:
            state = {
                ...state,
                loading: false,
                posts:action.payload
            }
        break
        case PostConstants.GET_ALL_FALIURE:
            state = {
                ...state,
                loading: false,
            }
        break
        case PostConstants.GET_ONE_REQUEST:
            state = {
                ...state,
                loading: true
            }
        break
        case PostConstants.GET_ONE_SUCCESS:
            state = {
                ...state,
                loading: false,
                onePost:action.payload
            }
        break
        case PostConstants.GET_ONE_FALIURE:
            state = {
                ...state,
                loading: false,
            }
        break
        case PostConstants.CLIENT_REQUEST:
            state = {
                ...state,
                loading: true
            }
        break
        case PostConstants.CLIENT_SUCCESS:
            state = {
                ...state,
                loading: false,
                allPost:action.payload
            }
        break
        case PostConstants.CLIENT_FALIURE:
            state = {
                ...state,
                loading: false,
            }
        break

       

    }
    return state
}