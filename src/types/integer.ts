import {DummySchema} from './types'

// create smallest number that is greater than minimum and a mulitple of multipleOf
export function minmul(minimum: number, multipleOf: number, exclusive: number) {
  if (( minimum < 0 ) || ( !exclusive && minimum <= 0 )) {
    return 0
  }

  const min = exclusive ? minimum + 1 : minimum
  const rest = min % multipleOf

  if ( rest === 0 ) {
    return min
  }

  const sign = multipleOf / Math.abs(multipleOf)
  const quot = (min - rest) / multipleOf

  return (quot + sign) * multipleOf
}

// create smallest number that is greater than minimum and a mulitple of multipleOf
export function maxmul(maximum: number, multipleOf: number, exclusive: number) {
  const res = -minmul(-maximum, multipleOf, exclusive)

  return res
}

type ItegerSchema = {
    multipleOf: number,
    minimum: number,
    maximum: number,
    exclusiveMinimum: number,
    exclusiveMaximum: number
}

export function integer(schema: DummySchema) {
  const {
    multipleOf,
    minimum,
    maximum,
    exclusiveMinimum,
    exclusiveMaximum
  } = schema as ItegerSchema

  const mo = !Object.is(multipleOf, undefined)
  const mi = !Object.is(minimum, undefined)
  const ma = !Object.is(maximum, undefined)

  if ( ( mo && mi && ma ) ||
         ( !mo && mi && ma ) ) {
    // minimum and maximum
    if ( (( minimum < 0 ) || ( !exclusiveMinimum && minimum <= 0 )) &&
           (( maximum > 0 ) || ( !exclusiveMaximum && maximum >= 0 ))) {
      return 0
    }
    return exclusiveMinimum ? minimum + 1 : minimum

  }

  if ( mo && !mi && ma ) {
    // multipleOf and maximum
    return maxmul(maximum, multipleOf, exclusiveMaximum)
  }

  if ( mo && mi && !ma ) {
    // multipleOf and minimum
    return minmul(minimum, multipleOf, exclusiveMinimum)
  }

  if ( mo && !mi && !ma ) {
    // only multipleOf
    return 0
  }

  if ( !mo && !mi && ma ) {
    // only maximum
    if ( exclusiveMaximum ) {
      return maximum > 0 ? 0 : maximum - 1
    }
    return maximum >= 0 ? 0 : maximum

  }

  if ( !mo && mi && !ma ) {
    // only minimum
    if ( exclusiveMinimum ) {
      return minimum < 0 ? 0 : minimum + 1
    }
    return minimum <= 0 ? 0 : minimum

  }
  return 0
}
