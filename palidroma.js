console.log("Esercizio palidroma")

let word = prompt("Inserisci una parola")
word = word.toLowerCase()

function palidroma(text) {
  let newtext = ''
  for (let i = 0; i < text.length; i++) {
    let a = text.at(-i - 1)
    newtext += a
    console.log (i,a)
  }
  if (newtext === word) {
    console.log (`La parola ${word} è palidroma = ${newtext}`)
  } else {
   console.log (`La parola ${word} non è palidroma = ${newtext}`)
  }
}

const reversedText = palidroma(word) 
console.log(reversedText)
