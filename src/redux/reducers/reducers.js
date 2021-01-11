import { CHANGE_ACCENT_COLOR, CHANGE_BACKGROUND_COLOR, CHANGE_CONTENT_REGION, CHANGE_PRIMARY_COLOR, CHANGE_RESTRICTED_MODE } from './actionTypes';

export const initialState = {
    accentColor: localStorage.getItem('accentColor'),
    backgroundColor: localStorage.getItem('backgroundColor'),
    contentRegion: localStorage.getItem('contentRegion'),
    primaryColor: localStorage.getItem('primaryColor'),
    restrictedMode: localStorage.getItem('restrictedMode')
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_ACCENT_COLOR:
            localStorage.setItem('accentColor', action.payload)
            return {
                ...state, accentColor: action.payload
            }
        case CHANGE_BACKGROUND_COLOR:
            localStorage.setItem('backgroundColor', action.payload)
            return {
                ...state, backgroundColor: action.payload
            }
        case CHANGE_CONTENT_REGION:
            localStorage.setItem('contentRegion', action.payload)
            return {
                ...state, contentRegion: action.payload
            }
        case CHANGE_PRIMARY_COLOR:
            localStorage.setItem('primaryColor', action.payload)
            return {
                ...state, primaryColor: action.payload
            }
        case CHANGE_RESTRICTED_MODE:
            localStorage.setItem('restrictedMode', action.payload)
            return {
                ...state, restrictedMode: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;