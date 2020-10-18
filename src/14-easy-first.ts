export type First<T extends any[]> =
  // lengthプロパティが0！
  T extends { length: 0 } ? never : T[0]
  // inferで正規表現のキャプチャ的なことができるらしい
  // => Pに相当する型を後で使える
  // T extends [infer P, ...any[]] ? P : never
  // T[0] extends T[number] ? T[0] : never
  // keyof Tに0があるか?
  // T[Extract<keyof T, '0'>]
  // T extends [] ? never : T[0]
  // T[number] extends never ? never : T[0]
