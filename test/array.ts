import chai from 'chai'

import {minimal} from '../src/minimal'

chai.should()

describe('array schema definition', () => {

  it('should yield empty array', (done) => {
    minimal({
      type: 'array'
    }).should.deep.equal([])

    done()
  })

  it('should work with tuples', (done) => {
    minimal({
      type: 'array',
      items: [
        {type: 'integer'},
        {type: 'string'}
      ]
    }).should.deep.equal([0, ''])

    done()
  })

  it('should work with `prefixItems` tuples', (done) => {
    minimal({
      type: 'array',
      prefixItems: [
        {type: 'integer'},
        {type: 'string'}
      ]
    }).should.deep.equal([0, ''])

    done()
  })

  it('should work with minItems', (done) => {
    minimal({
      type: 'array',
      items:{type: 'integer'},
      minItems: 5
    }).should.deep.equal([0, 0, 0, 0, 0])

    done()
  })
})
