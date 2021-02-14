import { SET_PREVIEW_IMAGE, GET_PREVIEW_IMAGE } from '../type';

export const setPreviewImage = (url) => {
    return {
        type: SET_PREVIEW_IMAGE,
         url
    }
}

export const getImageURL = (url) => {
    return {
        type: GET_PREVIEW_IMAGE,
        url
    }
}