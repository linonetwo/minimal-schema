import {DummySchema} from './types'
import {integer} from './integer'

export function number(schema: DummySchema) {
  return integer(schema)
}
