type BaseFunction = (...args: any[]) => unknown;

export const memoize = <T extends BaseFunction>(fn: T): T => {
  const calls = new Map<string, unknown>();

  return ((...args: any[]) => {
    const argsKey = JSON.stringify(args);

    if (calls.has(argsKey)) {
      return calls.get(argsKey);
    }

    const result = fn(...args);

    calls.set(argsKey, result);

    return result;
  }) as T;
};
