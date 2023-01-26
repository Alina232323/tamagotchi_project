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

    changePlantAppearence() {
        if (this.age.innerHTML <= 1) {
            document.body.style.display = "url(/images/empty.png)"
        } else if (this.age.innerHTML > 1 && this.age.innerHTML <= 5) {
            document.body.style.display = "url(/images/atart-growing.png)"
        } else if (this.age.innerHTML > 5 && this.age.innerHTML <= 10) {
            document.body.style.display = "url(/images/growing-plant.png)"
        } else if (this.age.innerHTML > 10 && this.age.innerHTML <= 20) {
            document.body.style.display = "url(/images/grown-plant.png)"
        }
    }

}
let inputName = prompt("Please, enter a name for your plant:", "")
const newPlant = new Tamagotchi(inputName)


//buttons declared
const waterButton = document.querySelector("#water-button")
const lightButton = document.querySelector("#light-button")
const ferButton = document.querySelector("#fer-button")

//scores declared
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
    waterCount = (newPlant.water -= 17)
    lightCount = (newPlant.sunshine -= 4)
    fertilizerCount = (newPlant.fertilizer -= 2)
    //end game if any of the scores reach 0
    if ((waterCount <= 0) || (lightCount <= 0) || (fertilizerCount <= 0)) {
        //then refresh all scores to 0, except main score and age
        waterCount = 0
        lightCount = 0
        fertilizerCount = 0
        clearInterval(playUpdate) //the timer stops running
        alert(`Your score is ${score}`)
    }

    score += 1
    age += 1
    mainScore.innerHTML = score
    waterScore.innerHTML = waterCount
    lightScore.innerHTML = lightCount
    ferScore.innerHTML = fertilizerCount
    ageScore.innerHTML = age


}
play()