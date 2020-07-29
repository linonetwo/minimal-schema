import chai from 'chai'

import {empty} from '../src/empty'

chai.should()

describe('boolean schema definition', () => {

  it('should yield false', (done) => {
    const schema = {
      type: 'boolean'
    }

    empty(schema).should.equal(false)

    done()
  })

  it('should work with default', (done) => {
    const schema = {
      type: 'boolean',
      default: true
    }

    empty(schema).should.equal(true)

    done()
  })
})
