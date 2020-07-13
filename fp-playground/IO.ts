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
    chain<R>(f: (x: I) => R): R {
        return this.map(f).join();
    }
}