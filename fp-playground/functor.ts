export abstract class Functor<T> {
    // static of<T>(x: unknown) {
    //     const f: (x: unknown) => T = (x) => {
    //         return x as T;
    //     }
    //     return new Functor<T>(f(x));
    // }
    abstract map<R>(f: (x: T) => R): Functor<R>;
    inspect() {
        return "Map(${inspect(this.$value)})";
    }
}
export class PointedFunctor<T> extends Functor<T> {
    static of<T>(x: T): PointedFunctor<T> {
        return new PointedFunctor<T>(x);
    }
    constructor(readonly value: T) {super()}
    map<R>(f: (x: T) => R): PointedFunctor<R> {
        return PointedFunctor.of<R>(f(this.value));
    }
}