class Tamagotchi {
    constructor(name) {
        this.name = name;
        this.water = 100;
        this.sunshine = 100;
        this.fertilizer = 100;
        this.age = 0;
        this.score = 0;
    }
    addWater() {
        this.water += 10
        document.body.style.backgroundImage = "url(/images/night.jpg)"
    }

    lightSwitch() {
        this.sunshine += 10
        document.body.style.backgroundImage = "url(/images/day.jpg)"
    }
    addFertilizer() {
        this.fertilizer += 10
    }

}
let inputName = prompt("Please, enter a name for your plant:", "")
const newPlant = new Tamagotchi(inputName)


//buttons declared + methods called using eventListeners
const waterButton = document.querySelector("#water-button")
waterButton.addEventListener("click", ()=>
newPlant.addWater())


const lightButton = document.querySelector("#light-button")
lightButton.addEventListener("click", ()=>
newPlant.lightSwitch())

const ferButton = document.querySelector("#fer-button")
ferButton.addEventListener("click", ()=>
newPlant.addFertilizer())

//scores shown on the screen
const mainScore = document.querySelector("#score")
const waterScore = document.querySelector("#water")
const lightScore = document.querySelector("#daylight")
const ferScore = document.querySelector("#fertilizer")
const ageScore = document.querySelector("#age")


let waterCount
let lightCount
let fertilizerCount
let score = 0
let age = 0


let day = 1000 //day equals 1 sec
let playUpdate = setInterval(play, day) //the count will run each 1 sec

//scores start going down with the timer
function play() {
    waterCount = (newPlant.water -= 7)
    lightCount = (newPlant.sunshine -= 4)
    fertilizerCount = (newPlant.fertilizer -= 2)
    score += 1
    age += 1
    //end game if any of the scores reach 0
    if ((waterCount <= 0) || (lightCount <= 0) || (fertilizerCount <= 0)) {
        //then refresh all scores to 0, except main score and age
        waterCount = 0
        lightCount = 0
        fertilizerCount = 0
        clearInterval(playUpdate) //the timer stops running
        alert(`Your score is ${score}`)
    }
    
    mainScore.innerHTML = score
    waterScore.innerHTML = waterCount
    lightScore.innerHTML = lightCount
    ferScore.innerHTML = fertilizerCount
    ageScore.innerHTML = age

}
play()





//character switcher
// if (age <= 1) {
//     document.getElementById("#empty").style.display = "block"
//     document.getElementById("#start-growing").style.display = "none"
//     document.getElementById("#growing-plant").style.display = "none"
//     document.getElementById("#grown-plant").style.display = "none"
// } else if (age > 1 && age <= 5) {
//     document.getElementById("#empty").style.display = "none"
//     document.getElementById("#start-growing").style.display = "block"
//     document.getElementById("#growing-plant").style.display = "none"
//     document.getElementById("#grown-plant").style.display = "none"
// } else if (age > 5 && age <= 10) {
//     document.getElementById("#empty").style.display = "none"
//     document.getElementById("#start-growing").style.display = "none"
//     document.getElementById("#growing-plant").style.display = "block"
//     document.getElementById("#grown-plant").style.display = "none"
// } else if (age > 10 && age <= 20) {
//     document.getElementById("#empty").style.display = "none"
//     document.getElementById("#start-growing").style.display = "none"
//     document.getElementById("#growing-plant").style.display = "none"
//     document.getElementById("#grown-plant").style.display = "block"
// }
