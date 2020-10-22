import { Equal, Expect } from '@type-challenges/utils'
import { If } from '../src/268-easy-if'

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]

/* // @ts-expect-error => unused */
type error = If<null, 'a', 'b'>

test('', () => expect(true).toBeTruthy())
