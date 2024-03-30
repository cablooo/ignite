import { combineReducers } from "redux";
import gamesReducers from './gamesReducers'


const initState = {
    name: '',
    isLoggedIn: false
}

const userReducer = (state = initState, action) => {
    switch(action.type) {
        default:
            return {...state}
    }
}

const rootReducer = combineReducers({
    games: gamesReducers,
    user: userReducer
})

export default rootReducer