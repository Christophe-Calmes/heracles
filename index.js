// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require('./src/Fighter')
const coliser = true;

const Heracles = new Fighter('🧔 Heracles', 20, 6);
const boar = new Fighter("🐗 Erymanthian Boar", 25, 12);
const Nemean = new Fighter('🦁 Lion', 10, 0);

const coliseum = (figtherA, figtherB) => {
    let round = 0
    let go = true;
    do {
        round ++;
        console.info(`Round ${round}`)
        figtherA.figth(figtherA.Attack('sword', 10),figtherB.Dodge());
        figtherB.figth(figtherB.Attack(),figtherA.Dodge('shield', 10));
        console.info(figtherA.setLife())
        console.info(figtherB.setLife());
            if (figtherA.dead()) {
                go = !figtherA.dead(); 
            }
            if(figtherB.dead()){
                go = !figtherB.dead();
            }
      } while (go);
      //console.log(go)
      if(!go)  {
        console.info(figtherA.deadCaractere(figtherB));
        console.info(figtherB.deadCaractere(figtherA));
      }
}


if (coliser) {
    coliseum(Heracles, boar);

}
