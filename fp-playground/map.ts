import { Functor } from './functor';
type AnyFunctor<T> = Functor<T>;
export function map<T, R extends Functor<T>, O, S extends Functor<O>>(f: (x: T) => O): (anyFunctor: R) => S {
    return (anyFunctor: R) => anyFunctor.map<O>(f) as S;
}