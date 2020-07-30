import chai from 'chai'
import Ajv from 'ajv'

import {minimal} from '../src/minimal'
import {DummySchema} from '../src/types'

chai.should()

describe('string schema definition', () => {

  it('string schema should yield empty string', () => {
    const schema = {
      type: 'string'
    }

    minimal(schema).should.equal('')
  })

  it('string schema with default should work', () => {
    const schema = {
      type: 'string',
      default: 'foo'
    }

    minimal(schema).should.equal('foo')
  })

  describe('format', () => {
    const createValidation = (schema: DummySchema) => new Ajv().compile(schema);
    [
      'date',
      'time',
      'date-time',
      'uri',
      'uri-reference',
      'uri-template',
      'url',
      'email',
      'hostname',
      'ipv4',
      'ipv6',
      'regex',
      'uuid',
      'json-pointer',
      'relative-json-pointer'
    ].forEach(format => {
      it(`should generate valid data for '${format}' format`, () => {
        const schema = {type: 'string', format}
        createValidation(schema)(minimal(schema)).should.be.true
      })
    })
  })
})
