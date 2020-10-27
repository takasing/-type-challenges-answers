import { Equal, Expect } from '@type-challenges/utils'
import { Length } from '../../src/easy/18-easy-tuple-length'

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
]

test('', () => expect(true).toBeTruthy())
