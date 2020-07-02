type compose_1<T> = (x?: T) => any;
type compose_2<T> = (x: any) => T;
export function compose<O, I = undefined>(f: compose_2<O>, g: compose_1<I>): (x?: I) => O {
    return (x?: I) => f(g(x));
}