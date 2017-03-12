import store from './store'
import {registerPlugin} from './actions'

(window.plugins || []).forEach(pl => store.dispatch(registerPlugin(pl())))
