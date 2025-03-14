function multiply(...args) {
    let result = 1;
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== "string") {
            if (typeof args[i] === "number" && !Number.isInteger(args[i])) {
                result *= Math.floor(args[i]);
            } else {
                result *= args[i];
            }
        }
    }
    console.log(result);
    return result;
}

multiply(10, 20);
multiply("A", 10, 30);
multiply(100.5, 10, "B");
multiply(5.7, 2, 3);