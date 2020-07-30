import chai from 'chai'

import {minimal} from '../src/minimal'

chai.should()

describe('enum schema definition', () => {

  it('should yield first enum value', () => {
    const schema = {
      enum: [
        42
      ]
    }

    minimal(schema).should.equal(42)
  })
})
