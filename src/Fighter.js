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
            this.life = 0;
            return true;
        } else {
            return false;
        }
    }
    figth(figther) {
        const  dammagePoint = Math.floor(Math.random() * figther.strength);
        const dodge = Math.floor(Math.random() * this.dexterity);
        const lostPointOfLife = dammagePoint - dodge;
        if (lostPointOfLife>0) {
            //console.info(lostPointOfLife);
            this.life = this.life - (dammagePoint - dodge);
            this.dead();
            return `${this.name} hit ${figther.name} attack = ${lostPointOfLife} !`;
           
        } else {
            //console.info(lostPointOfLife);
            return `${this.name} miss ${figther.name} !?`;
        }
    }
    resurrected() {
        this.life = MAX_LIFE;
    }
    deadCaractere(figther) {
        if(this.dead()) {
            return `${this.name} is 💀, ${figther.name} 🏆 ! Point of life = ${this.life}`;
        } else {
            return `${this.name} live !`;
        }
    }
}
module.exports = Fighter;
