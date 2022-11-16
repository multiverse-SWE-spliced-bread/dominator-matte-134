const btn1 = document.getElementById("quiet-btn")
const btn2 = document.getElementById("loud-btn")
const btn3 = document.getElementById("sarc-btn")

btn1.addEventListener('click', myFun)
function myFun () {
    let p = document.getElementById("patrick")
    let text = p.innerText
    text = text.toLowerCase()
    p.innerText = text
}
btn2.addEventListener('click', myFun2)
function myFun2 () {
    let p = document.getElementById("patrick")
    let text = p.innerText
    text = text.toUpperCase()
    p.innerText = text
}
btn3.addEventListener('click', myFun3)
function myFun3 () {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let p = document.getElementById("patrick")
    let text = p.innerText
    text = text.toLowerCase()
    let newText = ''
    let i = 0
    let result = ''
    for (let char of text) {
        if (alphabet.includes(char)) {
            if (i % 2 === 0) {
                result += char
            } else {
                result += char.toUpperCase()
            }
            i += 1
        } else {
            result += char
        }
    }
    p.innerText = result
}
