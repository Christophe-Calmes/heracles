// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require('./src/Fighter')
const debug = true;
const figth_club = true;

const Heracles = new Fighter('🧔 Heracles', 20, 6);
const Nemean = new Fighter('🦁 Lion', 11, 13);

if(debug) {
    console.info(Heracles);
    console.info(Nemean);
    console.log(Heracles.setLife())
    console.log(Nemean.setLife());
}
if(figth_club) {
    for (let index = 0; index < 4; index++) {
        Heracles.figth(Nemean);
        Nemean.figth(Heracles);
        console.log(Heracles.setLife())
        console.log(Nemean.setLife());
    }
}