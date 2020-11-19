// indexing with an arbitrary type is using number to get the type of an array’s elements.
// [3, 1, 2][number] // => 1 | 2 | 3

// export type TupleToUnion<T> = T[any] 
// export type TupleToUnion<T extends Array<any>> = T[number] 
// export type TupleToUnion<T extends any[]> = T[number] 
// export type TupleToUnion<T> = T extends any[] ? T[number] : never
// ???????
// export type TupleToUnion<T> = T[number & keyof T]
// export type TupleToUnion<T> = T extends Array<infer U> ? U : never
export type TupleToUnion<T> = T extends (infer U)[] ? U : never