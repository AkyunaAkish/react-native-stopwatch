import React, {
  Component
} from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'

class StartStop extends Component {

  handleStartPress() {
    if(this.props.running) {
      clearInterval(this.interval)
      this.props.stopTime(this.props.timeElapsed, 0)
    } else {
      this.props.setStartTime(new Date())
      this.interval = setInterval(() => {
        this.props.setTimeElapsed(new Date() - this.props.startTime)
      }, 30)
    }
  }

  render() {
    return (
      <TouchableHighlight
        style={[styles.button, this.props.running ? styles.stopButton : styles.startButton]}
        underlayColor='gray'
        onPress={this.handleStartPress.bind(this)}>
        <Text>
          {this.props.running ? 'STOP' : 'START'}
        </Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00CC00'
  },
  stopButton: {
    borderColor: '#CC0000'
  }
})


function mapStateToProps(state) {
  return {
    timeElapsed: state.stopWatch.timeElapsed,
    running: state.stopWatch.running,
    startTime: state.stopWatch.startTime
  }
}

export default connect(mapStateToProps, actions)(StartStop)
