export type DeepReadonly<T> = {
  // NG
  // readonly [k in keyof T]: T[k] extends object ? DeepReadonly<T[k]> : T[k]
  readonly [k in keyof T]: T[k] extends Record<any, any>
    ? T[k] extends Function
      ? T[k]
      : DeepReadonly<T[k]>
    : T[k]
}
// export type DeepReadonly<T> =
//   T extends Function
//     ? T
//     : T extends {}
//       ? { readonly [k in keyof T]: DeepReadonly<T[k]> }
//       : T

// ????????????????????
// if T is no longer an object
// export type DeepReadonly<T> = keyof T extends never
//   ? T
//   : { readonly [k in keyof T]: DeepReadonly<T[k]> }
