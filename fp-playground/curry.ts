function curry<FI, SI, O>(f: (x: FI, y: SI) => O): (x: FI) => (y: SI) => O | ((x: FI, y: SI) => O) {
    return (x: FI) => (y: SI) => f(x, y);
}
export { curry };