export function curry<T, S, R>(f: (x: T, y: S) => R): (x: T) => (y: S) => R {
    return (x: T) => (y: S) => f(x, y);
}