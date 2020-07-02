export class Functor<T> {
    static of<T>(x: unknown) {
        const f: (x: unknown) => T = (x) => {
            return x as T;
        }
        return new Functor<T>(f(x));
    }
    constructor(readonly value: T) {}
    map<R>(f: (x: T) => R): Functor<R> {
        return new Functor<R>(f(this.value));
    }
}