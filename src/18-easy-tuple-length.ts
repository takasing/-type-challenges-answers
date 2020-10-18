export type Length<T extends readonly string[]> =
// export type Length<T extends {readonly length: number}> =
  T['length']

// export type Length<T extends any> = T extends { length: infer R } ? R : never
// export type Length<T extends any> = 'length' extends keyof T ? T['length'] : never
