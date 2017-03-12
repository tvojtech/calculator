const plugin = require('./index.js')
const expect = require('chai').expect

describe('calculator-subtract', () => {

  let subtract

  beforeEach(() => subtract = plugin())
  afterEach(() => subtract = null)

  it('should have correct name', () => {
    expect(subtract.type).to.equal('subtract')
    expect(subtract.name).to.equal('Subtract')
  })

  describe('valid input', () => {

    it('should return correct output for valid input', () => {
      expect(subtract.apply(0, 0)).to.equal(0)
      expect(subtract.apply(0, 3)).to.equal(-3)
      expect(subtract.apply(3, 0)).to.equal(3)
      expect(subtract.apply(-4, 2)).to.equal(-6)
      expect(subtract.apply(-4, -2)).to.equal(-2)
      expect(subtract.apply(4, -2)).to.equal(6)
      expect(subtract.apply(4, Infinity)).to.equal(-Infinity)
      expect(subtract.apply(Infinity, 5)).to.equal(Infinity)
      expect(subtract.apply(-Infinity, 5)).to.equal(-Infinity)
    })

  })

  describe('invalid input', () => {

    it('should end with error for invalid input', () => {
      expect(subtract.apply.bind(null, 'a', 4)).to.throw(Error)
    })

  })

})
