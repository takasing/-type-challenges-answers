import { Equal, Expect, NotAny } from '@type-challenges/utils'
import { HelloWorld } from '../../src/warmup/13-warm-hello-world'

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>
]
// ↑をtestしたい
test('', () => expect(true).toBeTruthy())
