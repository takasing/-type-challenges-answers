import { Equal, Expect } from '@type-challenges/utils'
import { DeepReadonly } from '../../src/medium/9-medium-deep-readonly'

type cases = [
  Expect<Equal<DeepReadonly<X>, Expected>>,
]

type X = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
    }
  }
}

type Expected = {
  readonly a: () => 22
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: 'string'
        }
        readonly k: 'hello'
      }
    }
  }
}

// never is union with 0 length
// never be true?
type A<T> = T extends never ? true : false
type subcases = [
  Expect<Equal<A<never>, never>>,
  Expect<Equal<A<object>, false>>,
  Expect<Equal<A<any>, true|false>>,
  Expect<Equal<A<undefined>, false>>,
  Expect<Equal<A<unknown>, false>>,
  Expect<Equal<A<boolean>, false>>,
  Expect<Equal<A<string>, false>>,
  Expect<Equal<A<Function>, false>>,
  Expect<Equal<A<keyof {a: string}>, false>>,
  Expect<Equal<A<keyof {}>, never>>,
  Expect<Equal<A<keyof string>, false>>,
  Expect<Equal<A<keyof number>, false>>,
  Expect<Equal<A<keyof Function>, false>>,
]
test('', () => expect(true).toBeTruthy())
