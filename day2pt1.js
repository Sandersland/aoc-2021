(async() => {
    const response = await fetch("https://adventofcode.com/2021/day/2/input");
    const text = await response.text();
    let inputData = text.split("\n");

    const position = {
        x: 0, // horizontal
        y: 0 // depth
    };

    for (let i = 0; i < inputData.length; i++) {
        const [direction, numString] = inputData[i].split(" ");
        const units = parseInt(numString);
        
        switch(direction) {
            case "up":
                position.y -= units;
                break;
            case "down":
                position.y += units;
                break;
            case "forward":
                position.x += units;
                break;
            default:
                break;
        }
    }

    const result = position.x * position.y;
    console.log(result);
})();