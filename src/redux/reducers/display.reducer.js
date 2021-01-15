import ActionTypes from '../actions/action.types';


const initialState = {
    accentColor: localStorage.getItem('accentColor') || '#fff',
    backgroundColor: localStorage.getItem('backgroundColor') || '#000',
    primaryColor: localStorage.getItem('primaryColor'),
}

const displayReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.CHANGE_ACCENT_COLOR:
            localStorage.setItem('accentColor', payload)
            return {
                ...state, accentColor: payload
            }
        case ActionTypes.CHANGE_BACKGROUND_COLOR:
            localStorage.setItem('backgroundColor', payload)
            return {
                ...state, backgroundColor: payload
            }
        case ActionTypes.CHANGE_PRIMARY_COLOR:
            localStorage.setItem('primaryColor', payload)
            return {
                ...state, primaryColor: payload
            }
        default:
            return state;
    }
}

export default displayReducer;