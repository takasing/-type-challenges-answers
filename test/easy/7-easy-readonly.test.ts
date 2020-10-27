import { Equal, Expect } from '@type-challenges/utils'
import { MyReadonly } from '../../src/easy/7-easy-readonly';

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
}
test('', () => expect(true).toBeTruthy())
