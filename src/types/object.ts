import {DummySchema} from './types'

type ObjectWithRequired = {
    required: string[]
    properties: Record<string, DummySchema>
}

export function object(
  schema: DummySchema,
  global: DummySchema,
  minimal: (schema: DummySchema, global: DummySchema) => any
) {
  if (!schema.required) {
    return {}
  }
  const schemaWithrequired = schema as ObjectWithRequired
  return schemaWithrequired.required
    .reduce<Record<string, unknown>>((prev, next) => {
      const prop = schemaWithrequired.properties[next]

      if (!prop) {
        throw new Error(`property \`${next}\` not defined on object`)
      }

      prev[next] = minimal(prop, global)

      return prev
    }, {})

}
