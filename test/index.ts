import chai from 'chai'

import {empty} from '../src/empty'

chai.should()

describe('index', () => {

  describe('empty', () => {
    it('should provide empty Schemas by interfacing _empty', () => {
      const schema = {
        type: 'object'
      }

      empty(schema).should.deep.equal({})
    })
  })

})
