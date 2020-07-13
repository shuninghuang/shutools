import { IO } from "./IO";

export abstract class InspectableClass {
    inspect() {
        return "Map(${inspect(this.$value)})";
    }
}
export interface Functor<T> {
    map: <O>(f: (x: T) => O) => Functor<O>;
}
export interface Monad<I> extends Functor<Functor<I>> {
    join: () => Functor<I>;
}
export interface Pointed<T> {
    value: T;
    of: <I, T extends Pointed<I>>(x: I) => T;
}