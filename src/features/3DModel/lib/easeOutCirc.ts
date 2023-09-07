function easeOutCirc(x: number) {
    return Math.sqrt(1 - Math.pow(x - 1, 4));
}

export default easeOutCirc;