/* Fighter class definition */
const Weapons = require('./Weapons')
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

    Attack(name = null, damage = null) {
        const stuff = new Weapons(name, damage)
        return Math.floor(Math.random() * this.strength) + stuff.setDamage();
    }
    Dodge(name = null, damage = null) {
        const stuff = new Weapons(name, damage)
        return Math.floor(Math.random() * this.dexterity) + stuff.setDamage();
    }
    figth(statAttack, statDodge) {
        const damage = statAttack - statDodge;
        console.log(damage)
        if(damage > 0) {
            this.life = this.life - damage;
            this.dead();
            return `${this.name} hit => attack = ${damage} !`;
        } else {
            return `${this.name} miss !`;
        }
    }

    deadCaractere(figther) {
        if(this.dead()) {
            return `${this.name} is 💀, ${figther.name} 🏆 !`;
        } else {
            return `${this.name} live !`;
        }
    }
}
module.exports = Fighter;
