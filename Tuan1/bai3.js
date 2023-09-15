var data = [
    dolphinsScores1 = [96, 108, 99],
    koalaScores1 = [93, 116, 110],
]

function calculateAverage(scores){
    const total = scores.reduce((acc, cr) => acc + cr, 0);
    return total / scores.length;
}
var dolphinsAverage = calculateAverage(dolphinsScores1);
console.log(dolphinsAverage);
var koalaAverage = calculateAverage(koalaScores1);
console.log(koalaAverage);

if  (dolphinsAverage > koalaAverage) {
    console.log(`Dolphins win (${dolphinsAverage} vs. ${koalaAverage})`);
} else if (dolphinsAverage < koalaAverage) {
    console.log(`Koalas win (${koalaAverage} vs. ${dolphinsAverage})`);
} else {
    console.log(`Draw (${dolphinsAverage} vs. ${koalaAverage})`);
}

function checkWinner(avgDolphins, avgKoa){
   const minScore = 100;
   var avgDolphins = calculateAverage(dolphinsScores1);
   var avgKoa = calculateAverage(koalaScores1);
   if (avgDolphins >= 100 && avgDolphins > avgKoa && avgKoa >=100 ) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoa})`);
   }else if (avgKoa >= 100 && avgKoa > avgDolphins && avgDolphins >=100 ) {
    console.log(`Koalas win (${avgKoa} vs. ${avgDolphins})`);
   }else if (avgDolphins >= 100 && avgKoa >= 100 && avgDolphins === avgKoa) {
    console.log(`Draw (${avgDolphins} vs. ${avgKoa})`);
    }else {
        console.log("No team wins...");
    }
}
checkWinner(dolphinsAverage, koalaAverage);