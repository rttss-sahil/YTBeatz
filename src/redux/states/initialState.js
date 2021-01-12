
const initialState = {
    accentColor: localStorage.getItem('accentColor') || '#fff',
    backgroundColor: localStorage.getItem('backgroundColor') || '#000',
    contentRegion: localStorage.getItem('contentRegion'),
    primaryColor: localStorage.getItem('primaryColor'),
    restrictedMode: localStorage.getItem('restrictedMode'),

}

export default initialState;