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

class Lap extends Component {

  handleLapPress() {
    if(this.props.timeElapsed > 0 && this.props.running) {
      this.props.setStartTime(new Date())
      this.props.addLap(this.props.timeElapsed)
    }
  }

  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor='gray'
        onPress={this.handleLapPress.bind(this)}>
        <Text>
          LAP
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
  }
})

function mapStateToProps(state) {
  return {
    timeElapsed: state.stopWatch.timeElapsed,
    startTime: state.stopWatch.startTime,
    running: state.stopWatch.running
  }
}

export default connect(mapStateToProps, actions)(Lap)
