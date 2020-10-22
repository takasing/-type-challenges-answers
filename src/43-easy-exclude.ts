// なんで？unionの場合はunion一つ一つに対して処理するとか？
export type MyExclude<T, U> = T extends U ? never : T
