import deref from 'simple-json-schema-deref'

import {merge} from './utils'
import {
  array,
  boolean,
  integer,
  getNull,
  number,
  object,
  string,
  StringSchema,
  DummySchema
} from './types'

export const empty = (schema: DummySchema) => {
  const denormed = deref(schema)
  return recursiveEmpty(denormed, denormed)
}

function recursiveEmpty(schema: DummySchema, global: DummySchema): any {
  const {
    type,
    'default': default_,
    'enum':    enum_,
    $ref,
    oneOf,
    anyOf,
    allOf
  } = schema

  if (default_) {
    return default_
  }

  if (enum_) {
    return (enum_ as unknown[])[0]
  }

  if ($ref) {
    return recursiveEmpty(
      deref($ref as DummySchema),
      global
    )
  }

  if (type) {
    let kind

    if (type instanceof Array) {
      kind = type.sort()[0]
    } else {
      kind = type
    }

    switch (kind) {
      case 'array':
        return array(schema, global, recursiveEmpty)

      case 'boolean':
        return boolean()

      case 'integer':
        return integer(schema)

      case 'number':
        return number(schema)

      case 'null':
        return getNull()

      case 'object':
        return object(schema, global, recursiveEmpty)

      case 'string':
        return string(schema as StringSchema)

      default:
        throw new Error(`cannot create value of type ${type}`)
    }
  } else if (allOf) {
    return recursiveEmpty(merge(allOf as DummySchema[]), global)
  } else if (anyOf) {
    return recursiveEmpty((anyOf as DummySchema[])[0], global)
  } else if ( oneOf ) {
    return recursiveEmpty((oneOf as DummySchema[])[0], global)
  } else {
    throw new Error(`cannot generate data from schema ${schema}`)
  }
}
