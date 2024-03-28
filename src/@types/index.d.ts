// Funcstions type
type FuncNoArg = () => void;
type FuncNoArgReturn<R> = () => R;
type FuncArg<T> = (a?: T) => void;
type FuncArgRequired<T> = (a: T) => void;
type FuncArgReturn<T, R> = (a?: T) => R;
type FuncArgRequiredReturn<T, R> = (a: T) => R;
type FuncArgs<A extends [...any]> = (...rest: A) => void;
type FuncArgsReturn<A extends [...any], R> = (...rest: A) => R;

type IndexStringSignature = { [index: string]: any };
