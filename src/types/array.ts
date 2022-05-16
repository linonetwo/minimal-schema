import {DummySchema} from './types'

export function array(
  schema: DummySchema,
  global: DummySchema,
  minimal: (schema: DummySchema, global: DummySchema) => any
) {
  const {
    prefixItems,
    items,
    minItems
  } = schema

  if (Array.isArray(prefixItems)) {
    return prefixItems.map((item) => minimal(item, global))
  }

  if (Array.isArray(items)) {
    return items.map((item) => minimal(item, global))
  }

  if (minItems && items) {
    return Array.from(
      new Array(minItems),
      () => minimal(items as DummySchema, global)
    )
  }

  return []
}
