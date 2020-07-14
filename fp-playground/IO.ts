import { compose } from './compose';
import { Functor, Pointed } from './functor'; 

export class IO<I> implements Functor<I> {
    static of<T>(x: T): IO<T> {
        return new IO<T>(() => x);
    }
    constructor(readonly unsafePerformIO: () => I) {
    }
    map<R>(f: (x: I) => R): IO<R> {
        return new IO<R>(compose(f, this.unsafePerformIO));
    }
    join() {
        const monad = this.unsafePerformIO();
        if (monad instanceof IO) {
            return monad;
        }
        throw new Error('not monadic');
    }
    ap(m: I extends (arg: infer R) => unknown ? IO<R> : never): I extends (arg: any) => infer R ? IO<R> : never {
        if (m) {
            const value = this.unsafePerformIO as unknown as (arg: any) => any;
            return m.map(value) as any;
        }
        throw new Error('not applicative');
    }
    chain<R>(f: (x: I) => R): R {
        return this.map(f).join();
    }
}