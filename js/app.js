const sounds = document.querySelectorAll(".sound")
let soundsKey = []

for (let i = 0; i < sounds.length; i++) {
    soundsKey.push('Key' + sounds[i].innerHTML)
}

let audio1 = new Audio("../files/ah.wav")
let audio2 = new Audio("../files/ayee.wav")
let audio3 = new Audio("../files/clap.wav")
let audio4 = new Audio("../files/gf_4.mp3")
let audio5 = new Audio("../files/guitar.wav")
let audio6 = new Audio("../files/angry.mp3")
let audio7 = new Audio("../files/badnoise1.mp3")
let audio8 = new Audio("../files/missnote2.mp3")
let audio9 = new Audio("../files/clicktext.mp3")
let audio10 = new Audio("../files/gf_1.mp3")
let audio11 = new Audio("../files/intro2.mp3")
let audio12 = new Audio("../files/gf_2.mp3")
let audio13 = new Audio("../files/introgo.mp3")
let audio14 = new Audio("../files/gf_3.mp3")
let audio15 = new Audio("../files//intro3.mp3")
let audio16 = new Audio("../files/intro1.mp3")

let audios = [audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9, audio10, audio11, audio12, audio13, audio14, audio15, audio16, audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9, audio10]

document.addEventListener("keyup", (e) => {

    if (soundsKey.includes(e.code)) {

        audios[soundsKey.indexOf(e.code)].play()

        sounds.forEach(el => el.innerHTML == e.code[3]
            ? el.classList.add('highlited')
            : el)

        setTimeout(() => {
            sounds.forEach(el => el.innerHTML == e.code[3]
                ? el.classList.remove('highlited')
                : el)
        }, 700)
    }
})