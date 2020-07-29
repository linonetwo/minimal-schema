import {DummySchema} from './types'

export function array(
  schema: DummySchema,
  global: DummySchema,
  empty: (schema: DummySchema, global: DummySchema) => any
) {
  const {
    items,
    minItems
  } = schema

  if (Array.isArray(items)) {
    return items.map((item) => empty(item, global))
  }

  if (minItems && items) {
    return Array.from(
      new Array(minItems),
      () => empty(items as DummySchema, global)
    )
  }

  return []
}
