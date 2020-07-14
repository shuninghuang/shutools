// import { Functor } from './functor';
// import { curry } from './curry';
// export function lift<T extends Functor<(...args: any[]) => any>>(f: (...args: unknown[]) => unknown): ((x: Functor<Parameters<typeof f>[0]>, y: Functor<Parameters<typeof f>[1]>) => Functor<ReturnType<typeof f>>) {
//     return curry((x?: Functor<Parameters<typeof f>[0]>, y?: Functor<Parameters<typeof f>[1]>) => T.of(f).ap(x).ap(y));
// }