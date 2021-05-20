import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import styles from "./styles";

const TodoInput = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  return (
    <View style={styles.todoInput}>
      <KeyboardAvoidingView style={styles.input}>
        <TextInput
          style={styles.inputInput}
          placeholder="Add Todo.."
          onChangeText={(text) => setTodo(text)}
          value={todo}
        ></TextInput>
      </KeyboardAvoidingView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          addTodo(todo.trim());
          setTodo("");
        }}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoInput;
