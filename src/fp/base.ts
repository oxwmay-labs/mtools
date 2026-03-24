type Curry<Res, Args, PrevArgs extends unknown[] = []> =
  Args extends [infer Head, ...infer Tail]
    ? Tail extends []
      ? (..._args: [...PrevArgs, Head]) => Res
      : ((..._args: [...PrevArgs, Head]) => Curry<Res, Tail>) & Curry<Res, Tail, [...PrevArgs, Head]>
    : () => Res;

export const curry = <Res, Ags extends unknown[]>(fn: (..._args: Ags) => Res): Curry<Res, Ags> => {
  const currier = (...args: unknown[]): unknown => {
    if (args.length >= fn.length) {
      return fn(...(args as Ags));
    }

    return (...next: unknown[]) => currier(...args, ...next);
  };

  return currier as Curry<Res, Ags>;
};