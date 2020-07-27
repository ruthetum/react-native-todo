import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const {height, width} = Dimensions.get("window");

export default class ToDO extends Component{
  state = {
    isEditing: false,
    isCompleted: false,
  };
  render() {
    const { isEditing, isCompleted } = this.state;
    return (
      <View style={styles.contatiner}>
        <View style={styles.column}>
          <TouchableOpacity onPress={this._toggleComplete}>
            <View
              style={[
                styles.circle,
                isCompleted ? styles.completedCircle : styles.uncompletedCircle
              ]}
            />
          </TouchableOpacity>
          <Text
            style={[
              styles.text,
              isCompleted ? styles.completedText : styles.uncompletedText
            ]}>
              Hello
          </Text>
        </View>
        {isEditing ? <View style={styles.actions}>
            <TouchableOpacity onPress={this._finishEditing}>
              <View style={styles.actionContainer}>
                <Text style={styles.actionText}>✅</Text>
              </View>
            </TouchableOpacity>
          </View> : <View style={styles.actions}>
            <TouchableOpacity onPress={this._startEditing}>
              <View style={styles.actionContainer}>
                <Text style={styles.actionText}>✏️</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.actionContainer}>
                <Text style={styles.actionText}>❌</Text>
              </View>
            </TouchableOpacity>
          </View>
        }
      </View>
    );
  }
  _toggleComplete = () => {
    this.setState(prevState => {
      return {
        isCompleted: !prevState.isCompleted
      };
    });
  };
  _startEditing = () => {
    this.setState({
      isEditing: true
    })
  };
  _finishEditing = () => {
    this.setState({
      isEditing: false
    })
  }
}

const styles = StyleSheet.create({
  contatiner: {
    width: width-50,
    borderBottomColor:"#bbb",
    borderBottomWidth:StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  circle: {
    width:30,
    height:30,
    borderRadius:15,
    borderWidth:3,
    marginRight:20,
  },
  completedCircle: {
    borderColor:"#bbb"
  },
  uncompletedCircle: {
    borderColor:"#F23657"
  },
  text: {
    fontWeight:"600",
    fontSize: 25,
    marginVertical: 20,
  },
  completedText: {
    color: "#bbb",
    textDecorationLine: "line-through"
  },
  uncompletedText: {
    color: "#353535"
  },
  column: {
    flexDirection: "row",
    alignItems: "center",
    // width: width/2,
    justifyContent: "space-between"
  },
  actions: {
    flexDirection:"row"
  },
  actionContainer: {
    marginVertical: 10,
    marginHorizontal: 10
  }
});