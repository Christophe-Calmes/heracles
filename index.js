// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require('./src/Fighter')
const debug = false;
const figth_club = false;
const coliser = true;

const Heracles = new Fighter('🧔 Heracles', 10, 6);
const Nemean = new Fighter('🦁 Lion', 10, 6);

if(debug) {
    console.info(Heracles);
    console.info(Nemean);
    console.log(Heracles.setLife())
    console.log(Nemean.setLife());
}
if(figth_club) {
    for (let index = 0; index < 20; index++) {

        Heracles.figth(Nemean);
        Nemean.figth(Heracles);
        console.log(Heracles.setLife())
        console.log(Nemean.setLife());
    }
}
const arena = () => {
    let round = 0
    let go = true;
    do {
        round ++;
        console.info(`Round ${round}`)
        Heracles.figth(Nemean);
        Nemean.figth(Heracles);
        console.info(Heracles.setLife())
        console.info(Nemean.setLife());
        if(debug) {
            console.log('Heracles dead ?'+Heracles.dead());
            console.log('Lion dead ?'+Nemean.dead());
        }
            if (Heracles.dead()) {
                go = !Heracles.dead();
            }
            if(Nemean.dead()){
                go = !Nemean.dead();
            }
      } while (go);
      //console.log(go)
      if(!go)  {
        console.info(Heracles.deadCaractere(Nemean));
        console.info(Nemean.deadCaractere(Heracles));
      }
      return {round: round, Player1: Heracles.deadCaractereDataAnalyse(), Player2: Nemean.deadCaractereDataAnalyse()};
}

if (coliser) {

    //arena();
 

}
const dataAnalyse = [];
if(coliser) {

    for (let index = 0; index <= 50; index++) {
        dataAnalyse.push(arena());
        Nemean.resurrected();
        Heracles.resurrected();
    }
   
}
console.info(dataAnalyse);