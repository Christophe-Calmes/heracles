// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require('./src/Fighter')
const debug = false;
const figth_club = false;
const coliser = true;

const Heracles = new Fighter('🧔 Heracles', 20, 6);
const Nemean = new Fighter('🦁 Lion', 12, 13);
/** Create the opponent  */
const boar = new Fighter("🐗 Erymanthian Boar", 25, 12);

if(debug) {
    console.info(Heracles);
    console.info(boar);
    console.log(Heracles.setLife())
    console.log(boar.setLife());
}
if(figth_club) {
    for (let index = 0; index < 20; index++) {

        Heracles.figth(boar);
        Nemean.figth(Heracles);
        console.log(Heracles.setLife())
        console.log(boar.setLife());
    }
}

const coliserum = (fighterA, fighterB) => {
    let round = 0
    let go = true;
    let resultFigth = [];
    do {
        round ++;
        console.info(`Round ${round}`)
        fighterA.figth(fighterB);
        fighterB.figth(fighterA);
        console.info(fighterA.setLife())
        console.info(fighterB.setLife());
        if(debug) {
            console.log('Heracles dead ?'+fighterA.dead());
            console.log('Lion dead ?'+fighterB.dead());
        }
            if (fighterA.dead()) {
                go = !fighterA.dead();
            }
            if(fighterB.dead()){
                go = !fighterB.dead();
            }
      } while (go);
      //console.log(go)
      if(!go)  {
        resultFigth.push(fighterA.deadCaractere(fighterB));
        resultFigth.push(fighterB.deadCaractere(fighterA));
        return resultFigth;
      }
}

if (coliser) {
    coliserum(Heracles, boar);
    coliserum(Heracles, Nemean);
}
