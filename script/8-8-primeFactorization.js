function primeFactor(num) {
    let result = [];
    let rest = num;
    let mod = no => {
        let index = 2;
        if (no === 1) {
            return;
        }
        while (no % index !== 0) {
            index++;
        }
        return index;
    };
    while (rest !== 1) {
        let remainder = mod(rest);
        result.push(remainder);
        rest /= remainder;
    }
    return `${num}=${result.join('')}`;
}

module.exports = primeFactor;