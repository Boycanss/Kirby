import { SET_PREVIEW_IMAGE } from '../type';

const initialState = {
    url: ''
};

export const previewReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PREVIEW_IMAGE:
            // console.log('setting');
            return {
                ...state,
                url: action.url
            }

        // case GET_PREVIEW_IMAGE:
        //     return {
        //         ...state,
        //         url: action.url
        //     }
        default: return state;
    }
};
