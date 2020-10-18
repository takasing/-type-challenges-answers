export type First<T extends any[]> =
  // lengthプロパティが0！
  T extends { length: 0 } ? never : T[0]
