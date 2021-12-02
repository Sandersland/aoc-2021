(async () => {

  const inputResponse = await fetch("https://adventofcode.com/2021/day/1/input");

  const inputData = await inputResponse.text();

  const depthMesurementArr = inputData.split("\n");

  let previousMeasurement = null;
  let count = 0;

  outerLoop: for (let i = 0; i < depthMesurementArr.length; i++) {
    let currentMeasurement = 0;
    for (let j = 0; j < 3; j++) {
      let idx = j + i;
      if (!depthMesurementArr[idx]) break outerLoop;
      currentMeasurement += parseInt(depthMesurementArr[idx], 10);
    }

    if (previousMeasurement) {
      if (currentMeasurement > previousMeasurement) {
          count++;
      } 
    }
    previousMeasurement = currentMeasurement;
  }

  console.log(count);

})();