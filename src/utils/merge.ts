import {DummySchema} from '../types'

export function merge(schemas: DummySchema[]): DummySchema {
  return schemas
    .reduce(
      (prev, next) => Object.assign(prev, next),
      {}
    )
}
