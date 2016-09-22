import React, {
  Component
} from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import formatTime from 'minutes-seconds-milliseconds'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

class Time extends Component {
  render() {
    return (
      <View>
        <Text style={styles.timer}>
          {formatTime(this.props.timeElapsed)}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  timer: {
    fontSize: 60
  }
})

function mapStateToProps(state) {
  return {
    timeElapsed: state.stopWatch.timeElapsed
  }
}

export default connect(mapStateToProps, actions)(Time)
