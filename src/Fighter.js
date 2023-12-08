/* Fighter class definition */
const MAX_LIFE = 100;

class Fighter {
    name;
    strength;
    dexterity;
    life;
    constructor(name, strength, dexterity) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
    }
    setLife() {
        return `This ${this.name} have ${this.life} point of life.`;
    }
    dead() {
        if(this.life <= 0) {
            return true;
        } else {
            return false;
        }
    }
    figth(figther) {
        const  dammagePoint = Math.floor(Math.random() * this.strength);
        const dodge = Math.floor(Math.random() * figther.dexterity);
        const lostPointOfLife = dammagePoint - dodge;
        if (lostPointOfLife>0) {
            this.life = this.life - (dammagePoint - dodge);
            this.dead();
            return `${this.name} hit ${figther.name} attack = ${lostPointOfLife} !`;
           
        } else {
            return `${this.name} miss ${figther.name} !?`;
        }
    }
    deadCaractere(figther) {
        console.log(this.dead())
        if(this.dead()) {
            return `${this.name} is dead, ${figther.name} win !`;
        } 
    }


}

module.exports = Fighter;
