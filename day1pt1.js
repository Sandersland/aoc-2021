(async () => {
  const inputResponse = await fetch("https://adventofcode.com/2021/day/1/input");

  const inputData = await inputResponse.text();

  const depthMesurementArr = inputData.split("\n");

  let previousMeasurement = null;
  let count = 0;

  for (let i = 0; i < depthMesurementArr.length; i++) {
      const currentMeasurement = parseInt(depthMesurementArr[i], 10);

      if (previousMeasurement) {
          if (currentMeasurement > previousMeasurement) count++;
      }


      previousMeasurement = currentMeasurement;
  }

  console.log(count);
})();