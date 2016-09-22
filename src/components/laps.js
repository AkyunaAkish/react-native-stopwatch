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
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native'

class Laps extends Component {

  guidGenerator(lap) {
    var S4 = function() {
      return (((1+Math.random())*0x10000)|0).toString(16).substring(1)
    }
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4()) + lap
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          scrollEnabled={true}>
          {this.props.laps.map((lap, index) => {
            return (
              <View
                style={styles.lap}
                key={this.guidGenerator(lap)}>
                <Text style={styles.lapText}>
                  Lap #{index + 1}
                </Text>
                <Text style={styles.lapText}>
                  {formatTime(lap)}
                </Text>
              </View>
            )
          })}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding: 10
  },
  lapText: {
    fontSize: 30
  },
  container: {
    flex: 1
  }
})

function mapStateToProps(state) {
  return {
    laps: state.stopWatch.laps
  }
}

export default connect(mapStateToProps, actions)(Laps)
