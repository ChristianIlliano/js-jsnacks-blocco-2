/**
 * Description
 * @param {string} array
 * @returns {string}
 */
function rimuoviDallaCoda(array) {
    let result = [];
    for(let i = 0;i < array.length -1; i++) {
        result.push(array[i]);
    }
    
    return result
} 