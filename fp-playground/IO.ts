import { compose } from './compose';
import { Functor } from './functor';

type IOPerformer = <T>() => T

export class IO<I> extends Functor<I> {
    static of<T>(x: T) {
        return new IO<T>(() => x);
    }
    constructor(readonly unsafePerformIO: () => I) {
        super();
    }
    map<R>(f: (x: I) => R): IO<R> {
        return new IO<R>(compose(f, this.unsafePerformIO));
    }
}