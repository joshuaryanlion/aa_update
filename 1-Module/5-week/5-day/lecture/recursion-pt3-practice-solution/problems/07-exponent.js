function exponent(num, power) {
    debugger
    if (power === 1) {
        return num;
    }
    if (power > 0) {
    return num * exponent(num, power - 1)
    } else {
        return (1/num) * exponent(num, power + 1)
    }
}
