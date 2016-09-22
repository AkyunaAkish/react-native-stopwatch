import {
  SET_TIME_ELAPSED,
  SET_START_TIME,
  STOP_TIME,
  ADD_LAP
} from '../actions/types'

const initialState = {
  timeElapsed: 0,
  running: false,
  startTime: 0,
  laps: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TIME_ELAPSED:
    return {
      ...state,
      timeElapsed: action.payload
    }
    break
    case SET_START_TIME:
    return {
      ...state,
      startTime: action.payload,
      running: true
    }
    break
    case STOP_TIME:
    return {
      ...state,
      startTime: action.payload.startTime,
      timeElapsed: action.payload.timeElapsed,
      running: false
    }
    break
    case ADD_LAP:
    return {
      ...state,
      laps: state.laps.concat([action.payload])
    }
    break
  }
  return { ...state }
}
