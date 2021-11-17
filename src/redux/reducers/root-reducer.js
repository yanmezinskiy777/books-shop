import { filterAction } from "../actions/filter-action-types"

export const initialFilter = {
    activeFilter: 'all',
    activeSort: 'popular'
}

export const filterReducer = (state = initialFilter, action) => {
    switch(action.type){
        case filterAction.SET_FILTER:
            return{
                ...state,
                activeFilter: action.payload
            }
        case filterAction.SET_CATEGORY:
            return{
                ...state,
                activeSort: action.payload
            }
        default:
            return state
    }
}   