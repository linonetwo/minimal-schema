import chai from 'chai'

import {empty} from '../src/empty'

chai.should()

describe('null schema definition', () => {

  it('should yield null', () => {
    const schema = {
      type: 'null'
    }

    chai.should().not.exist(empty(schema))
  })
})
