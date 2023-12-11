class Weapons {
    name;
    damage;
    constructor(name = null, damage = null) {
        this.name = name;
        this.damage = damage;
    }
    setName() {
        return this.name;
    }
    setDamage() {
        return Math.floor(Math.random()*this.damage);
    }
}
module.exports = Weapons;