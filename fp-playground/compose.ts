type compose_1<T> = (x?: T) => any;
type compose_2<T> = (x: any) => T;
export function compose<SO, FI = undefined>(f: compose_2<SO>, g: compose_1<FI>): (x?: FI) => SO {
    return (x?: FI) => f(g(x));
}
