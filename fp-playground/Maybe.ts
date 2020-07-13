import { Pointed, Functor } from "./functor";
import { compose } from "./compose";

export class Maybe<T> implements Functor<T> {
    static of<T>(x: T) {
        return new Maybe<T>(x);
    }
    get isNothing() {
        return this.value === null || this.value === undefined;
    }
    constructor(readonly value: T) {
    }
    map(f: (x: T) => unknown): Maybe<ReturnType<typeof f>> | Maybe<T> {
        return this.isNothing ? this : Maybe.of<ReturnType<typeof f>>(f(this.value))
    }
    ap(m: T extends (arg: infer R) => unknown ? Maybe<R> : undefined): T extends (arg: any) => infer R ? Maybe<R> : Maybe<undefined> {
        if (m) {
            const value = this.value as unknown as (arg: any) => any;
            return m.map(value) as any;
        }
        throw new Error('not applicative');
    }
}