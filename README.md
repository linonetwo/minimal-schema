# minimal-schema

This package is fork of [empty-schema](https://github.com/slurmulon/empty-schema) package, which is fork of [json-schema-empty](https://github.com/romeovs/json-schema-empty)

Difference:
  - introduces `format` support for strings, which means that generated data is valid against its JSON Schema;
  - supports `prefixItems` tuples;
  - contains minimal typescript typings: quite simple for now, but better than nothing.

> Generate empty placeholder data from JSON Schemas

Generating random data is useful for testing (try out [JSON Schema Faker](https://www.npmjs.com/package/json-schema-faker) or [hazy](https://www.npmjs.com/package/hazy) if you have this need), but developers often require empty placeholder data to work with, particularly when developing web forms.

Data that `minimal-schema` generates conforms to the following:
  - Data is generated deterministically. If the schema is the same, the data will be the same. Exception is `string` type with date and time related `format` keyword: in this case `new Date().toISOString()` data is used.
  - Data is as simple as possible.
  - Data conforms to the *form* specified in the schema.  It will, however, sometimes fail to be valid according to the schema. The reason for this is simple: you cannot generate all values automatically (see the [rules](#rules) section for more info on this).

## Installation

```sh
npm install --save minimal-schema
```

## Usage

```ts
import {minimal} from 'minimal-schema'

const schema = {
  type: 'object',
  properties: {
    foo: {
      type: 'integer',
      minimum: 12,
      multipleOf: 5
    },
    bar: {
      type: 'array',
      items: { type: 'integer' },
      minItems: 3
    },
    baz: {
      type: 'string',
      minLength: 5
    },
    email: {
        type: 'string',
        format: 'email'
    },
    dateTime: {
        type: 'string',
        format: 'date-time'
    }
  },
  required: [ 'foo', 'bar', 'baz', 'email', 'dateTime' ]
}

console.log(empty(schema))

// {
//   foo: 15,
//   bar: [ 0, 0, 0 ],
//   baz: '',
//   email: 'a@a',
//   dateTime: '2020-07-30T08:30:55.797Z'
// }
```

## Rules

  - **string**: except when `format` keyword is present, it impossible to guess what the string content should be, even when patterns and length limits are given, a string schema always results in the empty string: `''`. . Original behavior is inherited from `json-schema-empty`.

  - **integer**: `minimal-schema` tries to satisfy the `minimum`, `maximum`
    and `multipleOf` constraints whenever possible with the additional property
    that, when it is possible, `0` is returned.

  - **number**: just follows the `integer` schema.
  - **object**: tries to create a minimal object with as few keys as possible.
    Only keys that are in the `required` array are generated.

    Object size is ignored completely, for the same reason that the
    strings are empty: we cannot guess the keys.

  - **array**: 
    - when the `item` type is given, and `minItems` is given, the shortest array that matches this is generated;
    - supports `prefixItems` and `items` is a tuple;
    - `maxItems` is ignored;
    - whenever possible, the empty array is returned.

  - **boolean**: always results in `false`.
  - **null**: always results in `null`.

  - **oneOf**, **anyOf**: selects one of the accepted types and goes from there.
  - **allOf**: `minimal-schema` merges all schemas and works from that schema
    to generate a value.
  - **enum**: selects the first possible value.
  - `$ref`: just works!

Whenever specified, `minimal-schema` uses the `default` value (even if it
does not match the schema).

## TODO

- [ ] Create options: custom defaults and settings for each type

## License

This code is licensed under the ISC License
