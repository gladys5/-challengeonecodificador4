const img = document.querySelector(".img")
const buttonBlue = document.querySelector(".blue")
const active = document.querySelector(".active")
const text = document.querySelector(".text")
const phragraph = document.querySelector(".phragraph")
const msn = document.querySelector(".msn")
const btn = document.querySelector(".btn")
const btnActive = document.querySelector(".btnActive")
const textareaView = document.querySelector(".textareaView")
buttonBlue.onclick = () => {
  img.classList.toggle("active")
  phragraph.classList.toggle("active")
  msn.classList.toggle("active")
  btn.classList.toggle("btnActive")
  textareaView.classList.toggle("btnActive")
  console.log("blue")
}
function show(value) {
  document.getElementById("view").innerHTML = value
}
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
