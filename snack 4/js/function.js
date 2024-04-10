/**
 * Description
 * @param {string} array
 * @param {string} userElem
 * @returns {string}
 */
function trovaIndice(userElem, array) {
    let result = -1
    for (let i = 0; i < array.length; i++) {
        if (userElem === array[i]) {
            result = i;
            return result
        }
    }
    return result
}