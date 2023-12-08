class DataAnalyse {
    arrayData;
    constructor(arrayData) {
        this.arrayData = arrayData;
    }
    playerWin() {
        let Player1Win = 0;
        let Player2Win = 0;
        let MathNull = 0
        this.arrayData.map((element)=>{
            //console.log(element);
            if(element.Player1 === null) {
                Player1Win++
            }
            if(element.Player2 === null) {
                Player2Win++
            }
            if((element.Player2 != null) &&(element.Player1 != null)) {
                MathNull++
            }

        })
        const ratio = (data) => {
            //console.log(this.arrayData.length);
            return Math.floor((data/this.arrayData.length) *100);
        }
        return {total: this.arrayData.length, MathNull: MathNull, Player1Win: `${ratio(Player1Win)}%`, Player2Win: `${ratio(Player2Win)}%`};
    }
}
module.exports = DataAnalyse;