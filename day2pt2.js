(async() => {
    const response = await fetch("https://adventofcode.com/2021/day/2/input");
    const text = await response.text();
    let inputData = text.split("\n");

    const position = {
        x: 0, // horizontal
        y: 0 // depth
    };

    let aim = 0;

    for (let i = 0; i < inputData.length; i++) {
        const [direction, numString] = inputData[i].split(" ");
        const units = parseInt(numString);

        switch(direction) {
            case "up":
                   aim -= units;
                break;
            case "down":
                   aim += units;
                break;
            case "forward":
                position.x += units;
                position.y += (aim * units);
                break;
            default:
                break;
        }
    }

    const result = position.x * position.y;
    console.log(result);
})();