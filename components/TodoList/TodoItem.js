import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";

import styles from "./styles";

const TodoItem = ({ todo, id, completeTodo, deleteTodo }) => {
  if (todo.completed) {
    return (
      <View key={id} style={[styles.todoItem, styles.todoCompleted]}>
        <Text style={[styles.todoItemText, styles.todoCompleted]}>
          {todo.text}
        </Text>
        <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
          <Icon name="delete" />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <TouchableOpacity
      key={id}
      style={styles.todoItem}
      onPress={() => completeTodo(todo.id)}
    >
      <View>
        <Text style={styles.todoItemText}>{todo.text}</Text>
      </View>
      <View style={styles.notCompleted}></View>
    </TouchableOpacity>
  );
};

export default TodoItem;
