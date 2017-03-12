const plugin = require('./index.js')
const expect = require('chai').expect

describe('calculator-add', () => {

  let add

  beforeEach(() => add = plugin())
  afterEach(() => add = null)

  it('should have correct name', () => {
    expect(add.type).to.equal('add')
    expect(add.name).to.equal('Add')
  })

  describe('valid input', () => {

    it('should return correct output for valid input', () => {
      expect(add.apply(0, 0)).to.equal(0)
      expect(add.apply(0, 3)).to.equal(3)
      expect(add.apply(3, 0)).to.equal(3)
      expect(add.apply(-4, 2)).to.equal(-2)
      expect(add.apply(-4, -2)).to.equal(-6)
      expect(add.apply(4, -2)).to.equal(2)
      expect(add.apply(4, Infinity)).to.equal(Infinity)
      expect(add.apply(Infinity, 5)).to.equal(Infinity)
      expect(add.apply(-Infinity, 5)).to.equal(-Infinity)
    })

  })

  describe('invalid input', () => {

    it('should end with error for invalid input', () => {
      expect(add.apply.bind(null, 'a', 4)).to.throw(Error)
    })

  })

})
