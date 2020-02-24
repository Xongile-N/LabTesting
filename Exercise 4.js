'use strict'
const FToC = function (fDeg) {
  return 5 / 9 * (fDeg - 32)
}
const fOrig = -40
console.log(`${fOrig} degrees Fahrenheit is ${FToC(fOrig)} degrees celsius`)
