/**
 * Description
 * @param {array} arrayA
 * @param {string} Elem
 * @returns {array}
 */
function inserisciInTesta(arrayA, elem) {
    let arrayB = [elem]
    for(i = 0; i < arrayA.length; i++) {
        arrayB.push(`${arrayA[i]}`)
    }
    return arrayB
}