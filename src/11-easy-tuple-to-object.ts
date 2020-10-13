// { key: 'value of key', ... }にするので、tupleのvalueが取れればよい
export type TupleToObject<T extends readonly any[]> = { [k in T[number]]: k }
