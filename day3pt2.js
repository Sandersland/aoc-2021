(async() => {
    const response = await fetch("https://adventofcode.com/2021/day/3/input");
    const text = await response.text();
    let inputData = text.split("\n").map((num) => num.trim());

    function getRatingValue(input, criteriaCallback, criteriaIndex = 0) {
        const criteriaValue = criteriaCallback(input, criteriaIndex);
        const filteredInput = input.filter((num) => num.charAt(criteriaIndex) === criteriaValue);
        if (filteredInput.length > 1) return getRatingValue(filteredInput, criteriaCallback, criteriaIndex + 1);
        return parseInt(filteredInput[0], 2);
    }

    const oxygenGenRating = getRatingValue(inputData, (input, index) => {
        const count = {0: 0, 1: 0};

        for (let i = 0; i < input.length; i++) {
            const key = input[i].charAt(index);
            count[key]++;
        }

        return count[0] > count[1] ? "0" : "1";
    });

    const co2ScrubberRating = getRatingValue(inputData, (input, index) => {
        const count = {0: 0, 1: 0};

        for (let i = 0; i < input.length; i++) {
            const key = input[i].charAt(index);
            count[key]++;
        }

        return count[0] > count[1] ? "1" : "0";
    });

    const lifeSupportRating = oxygenGenRating * co2ScrubberRating;
    console.log(lifeSupportRating);
})();