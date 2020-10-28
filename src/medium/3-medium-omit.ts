// これ使っていきましょう
// https://www.typescriptlang.org/docs/handbook/utility-types.html
import { MyExclude } from '../easy/43-easy-exclude'
import { MyPick } from '../easy/4-easy-pick'
export type MyOmit<T, K> = { [k in MyExclude<keyof T, K>]: T[k] }

// export type MyOmit<T, K> = MyPick<T, Exclude<keyof T, K>>

// export type MyOmit<T, K> = {
//   [k in (
//     keyof T extends infer U
//       ? U extends K
//         ? never
//         : U extends keyof T
//           ? U
//           : never
//       : never
//   )]: T[k]
// }

// object[keyof Obj]ってなに。。。
// type OmitKey<T, K> = {
//   [k in keyof T]: k extends K ? never : k
// }[keyof T]
// export type MyOmit<T, K> = { [k in OmitKey<T, K>]: T[k]}
