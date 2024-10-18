console.log("Pari o dispari")

// Numero random da 1 a 5 per per il PC
function randomNumberFrom1to5(num1_5) {
  let num = Math.floor(Math.random() * 5) + 1
  return num
}
let choose = prompt ("Scegli pari o dispari")
if (choose === 'pari' || 'dispari') {
  console.log (choose)
  let numUser = parseInt(prompt("Inserisci un numero da 1 a 5"))
  if (numUser <= 5) {
    console.log(`numero dell'utente: ${numUser}`)
    let numPc = randomNumberFrom1to5()
    console.log(`numero del pc: ${numPc}`)
  } else {
    alert("Errore")
  }



} else {
  alert ("Errore")
}



