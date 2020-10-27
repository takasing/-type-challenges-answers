// keyof TでTのプロパティ名の直和型(Union Type. 'a' | 'b' | 'c'的な)
// inは反復処理。[k in K]でUnion TypeのKから一つずつkeyを取り出して処理
// readonlyのついたK[k]を返す
export type MyPick<T, K extends keyof T> = { [k in K]: T[k] };
// This answer is also correct.
// export type MyPick<T, K> = { [k in keyof T & K]: T[k] };
