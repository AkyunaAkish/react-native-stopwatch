import React, {
  Component
} from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import promise from 'redux-promise'
import reducers from './src/reducers'

import Time from './src/components/time'
import StartStop from './src/components/startStop'
import Lap from './src/components/lap'
import Laps from './src/components/laps'
const createStoreWithMiddleware = applyMiddleware(promise, logger())(createStore)

class stopwatch extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>

        <View style={styles.container}>

          <View style={styles.header}>

            <View style={styles.timerWrapper}>
              <Time />
            </View>

            <View style={styles.buttonWrapper}>
              <StartStop />
              <Lap />
            </View>

          </View>

          <View style={styles.footer}>
            <Laps />
          </View>

        </View>
      </Provider>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 1
  },
  timerWrapper: { // red
    flex: 5, // takes 5/8s of available space
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: { // green
    flex: 3, // takes 3/8s of available space
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})

AppRegistry.registerComponent('stopwatch', () => stopwatch)
