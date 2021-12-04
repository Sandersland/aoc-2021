(async() => {
    const response = await fetch("https://adventofcode.com/2021/day/3/input");
    const text = await response.text();
    let inputData = text.split("\n");

    const gammaRate = new Array();
    const epsilonRate = new Array();

    let counter = {};

    const average = inputData.length / 2;

    for (let i = 0; i < inputData.length; i++) {
        const bits = inputData[i].trim().split("");
        for (let j = 0; j < bits.length; j++) {
            if (!counter[j]) {
                counter[j] = 0;
            }
            counter[j] += parseInt(bits[j], 10);
        }
    }

    for (const key in counter) {
        if (counter[key] > average) {
            gammaRate[key] = "1";
            epsilonRate[key] = "0";
        } else {
            gammaRate[key] = "0";
            epsilonRate[key] = "1";
        }
    }

    const gammaRateNum = parseInt(gammaRate.join(""), 2);
    const epsilonRateNum = parseInt(epsilonRate.join(""), 2);
    const powerConsumption = gammaRateNum * epsilonRateNum;

    
    console.log(powerConsumption)
})();