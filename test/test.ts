import chai from 'chai'

import {minimal} from '../src/minimal'
import {DummySchema} from '../src/types'

chai.should()

function throwing(schema?: DummySchema, err = Error) {
  (() => minimal(schema!)).should.Throw(err)
}

describe('errors', () => {

  it('should error on unknown type', () => {
    throwing({
      type: 'bla'
    })
  })

  it('should error when no schema is passed', () => {
    throwing()
  })

  it('should throw when invalid schema is passed', () => {
    throwing({})
  })

})
