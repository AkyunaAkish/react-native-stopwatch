import {
  SET_START_TIME,
  SET_TIME_ELAPSED,
  STOP_TIME,
  ADD_LAP
} from './types'

export function addLap(lap) {
  return {
    type: ADD_LAP,
    payload: lap
  }
}

export function setStartTime(startTime) {
  return {
    type: SET_START_TIME,
    payload: startTime
  }
}

export function setTimeElapsed(timeElapsed) {
  return {
    type: SET_TIME_ELAPSED,
    payload:timeElapsed
  }
}

export function stopTime(timeElapsed, startTime) {
  return {
    type: STOP_TIME,
    payload: {
      timeElapsed: timeElapsed,
      startTime: startTime || 0
    }
  }
}
