import { Functor } from './functor';
export function map<FI, FO>(f: (x: FI) => FO): (anyFunctor: Functor<FI>) => Functor<FO> {
    return (anyFunctor: Functor<FI>) => anyFunctor.map<FO>(f);
}