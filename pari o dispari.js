console.log("Pari o dispari?")
// 
// Funzione => Numero random da 1 a 5 per per il PC
function randomNumberFrom1to5(num1_5) {
  let num = Math.floor(Math.random() * 5) + 1
  return num
}


// Sccegli pari o dispari
let choose = prompt("Scegli pari o dispari")
choose = choose.toLowerCase()


// Controllo Pari o dispari
if (choose === "pari" || choose === "dispari") {
  console.log("Hai scelto: " + choose)
  // Numero generato dall'utente
let numUser = parseInt(prompt("Inserisci un numero da 1 a 5"))
if (numUser <= 5) {
  console.log(`Numero dell'utente: ${numUser}`)
  // Numero generato dal pc
let numPc = randomNumberFrom1to5()
console.log(`Numero del pc: ${numPc}`)

//Somma dei numeri
let sum = numUser + numPc


// Funzione se è pari
function isEven(numero) {
  if (sum % 2 === 0) {
    return true
  } else {
    return false
  }
}


let result = isEven(sum)

// Controllo funzione is Even
if (result === true) {
  result = "pari"
  console.log(`La somma è ${sum} ed è ${result}`)
} else {
  result = "dispari"
  console.log(`La somma è ${sum} ed è ${result}`)
}


// Controllo vincitore
if (choose == result) {
  console.log(" Hai vinto!")
} else {
  console.log("Hai perso!")
}
}


/////// 2 errore 
else {
  alert("Errore")
}

} 

/////////////// 1 errore
else {
  alert("Errore")
}














