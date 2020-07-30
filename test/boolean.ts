import chai from 'chai'

import {minimal} from '../src/minimal'

chai.should()

describe('boolean schema definition', () => {

  it('should yield false', (done) => {
    const schema = {
      type: 'boolean'
    }

    minimal(schema).should.equal(false)

    done()
  })

  it('should work with default', (done) => {
    const schema = {
      type: 'boolean',
      default: true
    }

    minimal(schema).should.equal(true)

    done()
  })
})
