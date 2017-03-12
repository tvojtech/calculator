window.plugins = window.plugins || []

const subtractPlugin = () => ({
  type: 'subtract',
  name: 'Subtract',
  apply: (acc, value) =>  {
    if (isNaN(acc) || isNaN(value)) {
      throw Error('Invalid input. Only valid numbers are allowed.')
    }
    return acc - value
  }
})

window.plugins.push(subtractPlugin)

module.exports = subtractPlugin
