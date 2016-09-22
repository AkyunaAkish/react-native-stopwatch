import { combineReducers } from 'redux'
import stopWatchReducer from './stopWatchReducer'

const rootReducer = combineReducers({
  stopWatch: stopWatchReducer
})

export default rootReducer
