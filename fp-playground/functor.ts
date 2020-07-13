import { IO } from "./IO";
import { compose } from "./compose";
import { curry } from "./curry";

export abstract class InspectableClass {
    inspect() {
        return "Map(${inspect(this.$value)})";
    }
}
export interface Functor<T> {
    map: (f: (x: T) => unknown) => Functor<ReturnType<typeof f>>|Functor<T>;
}
export abstract class Pointed<T> implements Functor<T> {
    abstract value: () => T;
    static of: <I>(x: I) => Pointed<I>;
    abstract map: <O>(f: (x: T) => O) => Functor<O>;
}