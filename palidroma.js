console.log("Esercizio palidroma")

let word = prompt("Inserisci una parola")
word = word.toLowerCase()

function reverseword(text) {
  let newtext = ''
  for (let i = 0; i < text.length; i++) {
    let a = text.at(-i - 1)
    newtext += a
  }
  if (newtext === word) {
    console.log (`La parola ${word} è palidroma`)
  } else {
   console.log (`La parola ${word} non è palidroma`)
  }
}

const reversedText = reverseword(word) 
console.log(reversedText)
