window.plugins = window.plugins || []

const addPlugin = () => ({
  type: 'add',
  name: 'Add',
  apply: (acc, value) =>  {
    if (isNaN(acc) || isNaN(value)) {
      throw Error('Invalid input. Only valid numbers are allowed.')
    }
    return acc + value
  }
})

window.plugins.push(addPlugin)

module.exports = addPlugin
