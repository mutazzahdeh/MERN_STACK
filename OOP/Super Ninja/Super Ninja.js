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
           

        } 

        drinkSake(){
            this.health+=10
        }

}
class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health=200;
        this.speed=10;
        this.strenth=10
        this.wisdam=10;
    }
    speakWisdom(){
this.drinkSake();
console.log(`the wisdam of ninja is ${this.wisdam}`)

    }

}
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"