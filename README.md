# Calculator

Simple plugable calculator

## Prerequisites
- Node.js - tested with version 7.5.0

## Development
- install dependencies using `npm install` or `yarn install`
- run app with `npm start` or `yarn start`
- open url `http://localost:3000` in browser
- to run tests run `npm test` or `yarn test`

## Production
- build production ready version using `npm run build` or `yarn run build`

## Plugins
Application supports adding new calculator operations by implementing and bundling plugins.

To add a plugin to application just copy plugin js file to `public` directory and link the file in `public/index.html`.
Register plugin by adding something like `<script src="%PUBLIC_URL%/plugin-add.js" type="text/javascript"></script>` to `index.html`.

### Plugin API
During initialization the application looks for registered plugins in `window.plugins` variable. 
This variable is array and may not be initialized. 
Plugin should handle uninitialized plugins array by something like `window.plugins = window.plugins || []`.

Example of plugin code in ES6:

```
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
```

A plugin is a function that returns object with following properties:
- `type` - identifier of plugin
- `name` - human readable name
- `apply` - function that is called while processing calculator instructions
  - `acc` - accumulator - result of all opertions preceding current operation
  - `value` - value of current instruction

NOTE: Final plugin file bundled to the application (via copying or linking to `public` directory) must be ES5 valid code. Use [Babel](https://babeljs.io/) to transpile ES6 to ES5.

## TODOs

- currently the application does not support internationalization, all strings are hardcoded in code
- the app does not handle errors thrown out of plugins

