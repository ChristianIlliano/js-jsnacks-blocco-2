
/**
 * Description La funzione crea un array di 10 numeri random
 * @returns {Array}
 */
function generateArray() {
    let nArray = []

    for (let i = 0; i < 10; i++) {
        let numberInarray = getRndInteger(1, 100);

        nArray.push(numberInarray);
    }

    return nArray
 }

 function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

/**
 * Description stampa un'array in pagina
 * @param {array} arrayToPrint
 */
function printArray(arrayToPrint) {
   const resultElem = document.getElementById("result")
   console.log(resultElem);

   resultElem.innerHTML += `<li> ${arrayToPrint} </li>`;
}