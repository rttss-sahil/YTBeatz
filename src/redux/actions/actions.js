import { CHANGE_ACCENT_COLOR, CHANGE_BACKGROUND_COLOR, CHANGE_CONTENT_REGION, CHANGE_PRIMARY_COLOR, CHANGE_RESTRICTED_MODE } from './actionTypes';

export const changeAccentColor = payload => ({
    type: CHANGE_ACCENT_COLOR,
    payload
})

export const changeBackground = payload => ({
    type: CHANGE_BACKGROUND_COLOR,
    payload
})

export const changeContentRegion = payload => ({
    type: CHANGE_CONTENT_REGION,
    payload
})

export const changePrimaryColor = payload => ({
    type: CHANGE_PRIMARY_COLOR,
    payload
})

export const changeRestrictedMode = payload => ({
    type: CHANGE_RESTRICTED_MODE,
    payload
})
