import chai from 'chai'

import {minimal} from '../src/minimal'

chai.should()

describe('numbers', () => {

  it('should return 0 when possible', () => {
    const schema = {
      type: 'number'
    }

    minimal(schema).should.equal(0)
  })

  it('should use default', () => {
    const schema = {
      type: 'number',
      default: 42
    }

    minimal(schema).should.equal(42)
  })

  it('should work with non-integer multipleOf', () => {
    const schema = {
      type: 'number',
      multipleOf: 3.5,
      minimum: 5
    }

    minimal(schema).should.equal(7)
  })

})
