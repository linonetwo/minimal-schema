import chai from 'chai'

import {minimal} from '../src/minimal'

chai.should()

describe('null schema definition', () => {

  it('should yield null', () => {
    const schema = {
      type: 'null'
    }

    chai.should().not.exist(minimal(schema))
  })
})
