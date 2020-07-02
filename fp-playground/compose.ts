type compose_1<T> = (x: T) => any;
type compose_2<R> = (x: any) => R;
export function compose<T, R>(f: compose_2<R>, g: compose_1<T>): (x: T) => R {
    return (x: T) => f(g(x));
}