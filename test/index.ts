import chai from 'chai'

import {minimal} from '../src/minimal'

chai.should()

describe('index', () => {

  describe('empty', () => {
    it('should provide empty Schemas by interfacing _empty', () => {
      const schema = {
        type: 'object'
      }

      minimal(schema).should.deep.equal({})
    })
  })

})
