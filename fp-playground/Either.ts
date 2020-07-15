import { Functor } from './functor';

export class Either<T> implements Functor<T> {
    static of<T>(x: T): Right<T> {
        return new Right(x);
    }
    constructor(readonly value: T) {

    }
    map<R>(f: (x: T) => R): Either<R> {
        return Either.of<R>(f(this.value));
    }
}

export class Right<I> extends Either<I> {
    ap(m: I extends (arg: infer R) => unknown ? Right<R> : never): I extends (arg: any) => infer R ? Right<R> : never {
        if (m) {
            const value = this.value as unknown as (arg: any) => any;
            return m.map(value) as any;
        }
        throw new Error('not applicative');
    }
    join() {
        return this.value;
    }
    chain<R>(f: (x: I) => R): R {
        return f(this.value);
    }
}

export class Left extends Either<any> {
    map() {
        return this;
    }
    ap() {
        return this;
    }
    chain() {
        return this;
    }
}