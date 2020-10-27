import { Equal, Expect } from '@type-challenges/utils'
import { First } from '../../src/easy/14-easy-first'

type cases = [
  // 配列の最初
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  // tupleの最初
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  // ない時はnever
  Expect<Equal<First<[]>, never>>,
  // undefinedが等しくなること => ならない変更ってどんなのじゃろう
  Expect<Equal<First<[undefined]>, undefined>>
]

test('', () => expect(true).toBeTruthy())
