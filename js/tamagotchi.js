class Tmagotchi{
    constructor(name){
        this.name = name;
        this.water = 0;
        this.sunshine = 0;
        this.fertilizer = 0;
        this.age = 0;
    }

    waterLevelDrop()
    {
        setInterval(() =>
    {this.water -=1
    }, 1000)
    }

    sunshineLevelDrop()
    {
        setInterval(() =>
    {this.sunshine -=1
    }, 1000)
    }

    fertilizerLevelDrop()
    {
        setInterval(() =>
    {this.fertilizer -=1
    }, 1000)
    }

    ageLevelDrop()
    {
        setInterval(() =>
    {this.age +=1
    }, 1000)
    }

    addWater(){
        this.water +=1
    }
    addSunshine(){
        this.sunshine +=1
    }
    addFertilizer(){
        this.fertilizer +=1
    }

    isPlantAlive()
    {
        if(this.water === 0 || this.sunshine === 0 || this.fertilizer === 0){
            return false
        }else{
            return true
        }
    }

}

