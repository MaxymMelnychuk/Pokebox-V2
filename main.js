const burger = document.querySelector(".burger")
const line1 = document.querySelector(".move1");
const line2 = document.querySelector(".move2");
const line3 = document.querySelector(".move3");

burger.addEventListener("click", function() {
    line2.classList.toggle("line2");
    line1.classList.toggle("line1");
    line3.classList.toggle("line3");
})






/*
class Pokemon {
    constructor(name, hp, attack, defense, chance) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.chance = chance;
    }

    chancee() {
        this.chance = Math.random();
    }

    
    attac(target) {
        if (this.chance <= 0.5) {  
            console.log(`${this.name} attaque ${target.name}`);
            if (target.defense > 0) {
                target.hp -= this.attack;  
            } else {
                target.defense -= this.attack;  
            }
        } else {
            console.log(`${this.name} rate son attaque`);
        }
    }
}

const pikachu = new Pokemon("Pikachu", 20, 3, 5, 0.4);
const arbok = new Pokemon("Arbok", 18, 5, 2, 0.6);

while (pikachu.hp > 0 && arbok.hp > 0) {
   
    pikachu.chancee();
    arbok.chancee();

   

   
    if (arbok.hp <= 0) {
        console.log(`${arbok.name} est mort`);
        break;
    }

  
    arbok.attac(pikachu);


    if (pikachu.hp <= 0) {
        console.log(`${pikachu.name} est mort`);
        break;
    }

    console.log(`${pikachu.name} HP: ${pikachu.hp}`);
    console.log(`${arbok.name} HP: ${arbok.hp}`);
}  */
