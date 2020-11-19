import { Equal, Expect } from '@type-challenges/utils'
import { TupleToUnion } from '../../src/medium/10-medium-tuple-to-union';

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]

test('', () => expect(true).toBeTruthy())