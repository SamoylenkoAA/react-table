import {HIDE_LOADER, SHOW_LOADER} from "../constants";

const initialState = {
    loading: false,
}
export const spinner = (state = initialState, action) => {
    switch (action.type){
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}
        default:
            return state
    }
}