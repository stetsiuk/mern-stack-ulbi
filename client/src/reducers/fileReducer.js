const SET_FILES = "SET_FILES";
const SET_CURRENT_DIR = "SET_CURRENT_DIR";
const ADD_FILE = "ADD_FILE";
const SET_POPUP_DISPLAY = "SET_POPUP_DISPLAY";

const defaultState = {
    files: [],
    currentDir: null,
    popupDisplay: 'none',
};

export default function fileReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_FILES:
            return {
                ...state,
                files: action.payload
            };
        case SET_CURRENT_DIR:
            return {
                ...state,
                currentDir: action.payload
            };
        case ADD_FILE:
            return {
                ...state,
                files: [...state.files, action.payload]
            }
        case SET_POPUP_DISPLAY:
            return {
                ...state,
                popupDisplay: action.payload
            }
        default:
            return state;
    }
}

export const setFiles = (files) => ({type: SET_FILES, payload: files});
export const setCurrentDir = (currentDir) => ({type: SET_CURRENT_DIR, payload: currentDir});
export const addFile = (file) => ({type: ADD_FILE, payload: file});
export const setPopupDisplay = (display) => ({type: SET_POPUP_DISPLAY, payload: display});
