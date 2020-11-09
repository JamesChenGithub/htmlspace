const keys = document.querySelectorAll(".piano button")

keys.forEach(item => {
    item.addEventListener("click", () => playPinao(item.dataset.key))
})

const audio = document.getElementById("audioElement")
console.log(audio)

const playPinao = key => {
    
    const url = `./resource/${key}.MP3`
    console.log("click : " + key + ", url : " + url)
    audio.src = url
    audio.play()
}