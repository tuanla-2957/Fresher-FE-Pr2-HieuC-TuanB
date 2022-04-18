export const getDataFromLocalStorage = (key, initial = {}) => {
    return JSON.parse(localStorage.getItem(key)) || initial
}
