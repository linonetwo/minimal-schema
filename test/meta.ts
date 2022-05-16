import chai from 'chai'

import {minimal} from '../src/minimal'

chai.should()

describe('meta properties', () => {
  it('should work with oneOf', () => {
    const schema = {
      oneOf: [ {type: 'integer'}, {type: 'string'} ]
    }

    minimal(schema).should.equal(0)
  })

  it('should work with anyOf', () => {
    const schema = {
      anyOf: [ {type: 'integer'}, {type: 'string'} ]
    }

    minimal(schema).should.equal(0)
  })

  it('should work with allOf', () => {
    const schema = {
      allOf: [ {type: 'integer'}, {minimum: 5} ]
    }

    minimal(schema).should.equal(5)
  })

  it('should work for type unions', () => {
    const schema = {
      type: [ 'integer', 'string' ]
    }

    minimal(schema).should.equal(0)
  })
})

