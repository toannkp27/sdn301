export const refreshObject = (object) => {
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            if (typeof object[key] === 'string') object[key] = ''
            else if (Array.isArray(object[key])) object[key] = []
            else if (typeof object[key] === 'object') object[key] = {}
            else object[key] = undefined
        }
    }
    return object
}
export const removeUndefinedProps = (obj) => {
    for (let prop in obj) {
        if (!(obj[prop] || obj[prop] === '' || obj[prop] === 0)) {
            delete obj[prop]
        }
    }
    return obj
}
export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}