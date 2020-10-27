import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'
import { MyExclude } from '../../src/easy/43-easy-exclude'

type cases = [
    Expect<Equal<MyExclude<"a" | "b" | "c", "a">, Exclude<"a" | "b" | "c", "a">>>,
    Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, Exclude<"a" | "b" | "c", "a" | "b">>>,
    Expect<Equal<MyExclude<string | number | (() => void), Function>, Exclude<string | number | (() => void), Function>>>,
]

test('', () => expect(true).toBeTruthy())
