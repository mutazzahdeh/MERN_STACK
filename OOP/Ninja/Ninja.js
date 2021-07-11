class Ninja{
    constructor(name){
        this.name=name;
        this.health=50;
        this.speed=3;
        this.strenth=3;
        }
        sayName(){
            console.log(`the name of ninja is ${this.name}`)

        }
        showStats(){
            console.log(`the name of ninja is ${this.name}\nthe strength of ninja is ${this.strenth}\nthe speed of ninja is ${this.speed}\nthe health of ninja is ${this.health}`)
            console.log(``)

        } 

        drinkSake(){
            this.health+=10
        }

}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
