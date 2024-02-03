function genNumber(){

const popup = document.querySelector("#popup")
const min = Math.ceil(document.querySelector("#firstDigit").value)
const max = Math.floor(document.querySelector("#secondDigit").value)
const result = Math.floor(Math.random() * (max - min + 1)) + min
const resultNum = document.querySelector("#resultNumber").innerHTML = result

console.log(result)
popup.classList.add("openPopup")
document.querySelector("main").style.filter = 'blur(10px)'


}

function closePopup() {
    popup.classList.remove("openPopup")
    window.location.reload();
}

