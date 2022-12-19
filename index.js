function encrypter(letterEncripter) {
  let phrase = ""
  let phrase2 = ""

  for (let i = 0; i < letterEncripter.length; i++) {
    phrase += letterEncripter[i].toLowerCase()
    if (phrase.includes("a")) {
      phrase += "enter"
    }
    if (phrase.includes("e")) {
      phrase += "imes"
    }
    if (phrase.includes("i")) {
      phrase += "ai"
    }
    if (phrase.includes("o")) {
      phrase += "ober"
    }
    if (phrase.includes("u")) {
      phrase += "ufat"
    }

    // console.log(phrase)
  }
  phrase2 = phrase
  console.log(phrase2)
  return phrase2
}
encrypter("Hola")
