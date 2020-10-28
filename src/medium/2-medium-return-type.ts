export type MyReturnType<T> = T extends (...a: any) => infer R ? R : never
