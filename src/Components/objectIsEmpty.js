const objectIsEmpty = (obj) => {
    if (obj && Object.keys(obj).length === 0 && obj.constructor === Object) {
        return true;
    } else {
        return false;
    }
};

export default objectIsEmpty;