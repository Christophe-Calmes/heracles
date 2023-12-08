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
    figth(figther) {
       const  dammagePoint = Math.floor(Math.random() * this.strength);
        const dodge = Math.floor(Math.random() * figther.dexterity);
        const lostPointOfLife = dammagePoint - dodge;
        if (lostPointOfLife>0) {
            this.life = this.life - (dammagePoint - dodge);
            return `${this.name} hit ${figther.name} attack = ${lostPointOfLife} !`;
        } else {
            return `${this.name} miss ${figther.name} !?`;
        }
    }

}

module.exports = Fighter;
