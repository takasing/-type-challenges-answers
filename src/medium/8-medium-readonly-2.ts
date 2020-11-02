// unionを使うと思いついたのはよかった
// TODO: なんでMyReadonly2<T, K extends keyof T = keyof T>はOKで
// MyReadonly2<T, K extends keyof T>が死ぬのかわからん
// ↓こうなる
// Type 'false' does not satisfy the constraint 'true'.ts(2344)
// Generic type 'MyReadonly2' requires 2 type argument(s).ts(2314)
export type MyReadonly2<T, K extends keyof T = keyof T> =
  { readonly [k in K]: T[k] } & { [k in Exclude<keyof T, K>]: T[k] }
  // unionの場合後者で上書き？
  // T & { readonly [k in K]: T[k] }
  // と思ったけど反対でも行ける
  // { readonly [k in K]: T[k] } & T
