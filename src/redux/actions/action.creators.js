import ActionTypes from './action.types';

const ActionCreators = ({

    changeAccentColor: payload => ({
        type: ActionTypes.CHANGE_ACCENT_COLOR,
        payload
    }),

    changeBackground: payload => ({
        type: ActionTypes.CHANGE_BACKGROUND_COLOR,
        payload
    }),

    changeContentRegion: payload => ({
        type: ActionTypes.CHANGE_CONTENT_REGION,
        payload
    }),

    changePrimaryColor: payload => ({
        type: ActionTypes.CHANGE_PRIMARY_COLOR,
        payload
    }),

    changeRestrictedMode: payload => ({
        type: ActionTypes.CHANGE_RESTRICTED_MODE,
        payload
    }),

})

export default ActionCreators;