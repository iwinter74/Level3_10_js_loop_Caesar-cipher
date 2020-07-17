let text
let key
let result =""
let choice = document.getElementById("coding").value
console.log(choice)
let newLetter
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u","v", "w", "x", "y", "z"]
function myFunct() {
    text = document.getElementById("text").value
    console.log(text)
    text = text.toLowerCase()
    console.log(text)
    text = text.split("")
    console.log(text)
    key = document.getElementById("key").value
    console.log(key)
    let letter
    if (!coding.checked) {
        for (let i = 0; i < text.length; i++) {
            letter = text[i]
            console.log(i)
            console.log('letter', letter)
            console.log(alphabet.indexOf(letter))
            let index = Number(alphabet.indexOf(letter))
            console.log(`ìndex`, index)
            let newIndex = index - Number(key)
            console.log(`new index`, newIndex)
            if (newIndex < 0) {
                newIndex = newIndex + 26
                console.log(newIndex)
            }
            if (text[i]==" ") {
                newLetter = " "
            } else {
                newLetter = alphabet[newIndex]
                console.log(`new letter`, newLetter)
            }
            result += newLetter
            console.log(result)
        }
    } else {
    for (let i = 0; i < text.length; i++) {
        letter = text[i]
        console.log(i)
        console.log('letter', letter)
        console.log(alphabet.indexOf(letter))
        let index = Number(alphabet.indexOf(letter))
        console.log(`ìndex`, index)
        let newIndex = index + Number(key)
        console.log(`new index`, newIndex)
        if (newIndex >= 26) {
            newIndex = newIndex - 26
            console.log(newIndex)
        }
        if (text[i]==" ") {
            newLetter = " "
        } else {
            newLetter = alphabet[newIndex]
            console.log(`new letter`, newLetter)
        }
        result += newLetter
        console.log(result)
    }
    }
    document.getElementById("result").innerHTML = result
}
