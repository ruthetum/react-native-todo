import React, {Component} from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Dimensions, 
  TextInput,
} from "react-native";

const {height, width} = Dimensions.get("window");

export default class ToDO extends Component{
  state = {
    isEditing: false,
    isCompleted: false,
    toDoValue: ""
  };
  render() {
    const { isEditing, isCompleted, toDoValue } = this.state;
    const { text } = this.props;
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
          {isEditing ? (
            <TextInput
              style={[
                styles.input,
                styles.text,
                isCompleted ? styles.completedText : styles.uncompletedText
              ]}
              value={ toDoValue }
              multiline={ true }
              onChangeText={this._controllInput}
              returnKeyType={"done"}
              onBlur={this._finishEditing}
              autoCorrect={false}
            />
          ) : (
            <Text
            style={[
              styles.text,
              isCompleted ? styles.completedText : styles.uncompletedText
            ]}>
              {text}
            </Text>
          )}
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
    const { text } = this.props;
    this.setState({
      isEditing: true,
      toDoValue: text
    });
  };
  _finishEditing = () => {
    this.setState({
      isEditing: false
    });
  };
  _controllInput = (text) => {
    this.setState({
      toDoValue: text
    });
  };
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
    width: width/2
  },
  actions: {
    flexDirection:"row"
  },
  actionContainer: {
    marginVertical: 10,
    marginHorizontal: 10
  },
  input: {
    marginVertical: 15,
    width: width/2
  },
});