import { Functor } from './functor';
type AnyFunctor<T> = Functor<T>;
export function map<T, R>(f: (x: T) => R): (anyFunctor: Functor<T>) => Functor<R> {
    return (anyFunctor: Functor<T>) => anyFunctor.map<R>(f);
}