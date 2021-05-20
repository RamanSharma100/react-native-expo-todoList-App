import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Alert, Keyboard } from "react-native";

import Heading from "./components/Heading";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Test TODO",
      completed: true,
    },
    {
      id: 2,
      text: "Do Coding",
      completed: false,
    },
  ]);

  const addTodo = (todo) => {
    const data = {
      id: todos.length < 1 ? 1 : todos[todos.length - 1],
      text: todo,
      completed: false,
    };

    Keyboard.dismiss();
    setTodos([...todos, data]);
    Alert.alert("success", "Todo added successfully!");
  };

  const completeTodo = (id) => {
    const updatedTodo = todos.find((todo) => todo.id === id);
    updatedTodo.completed = true;
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? updatedTodo : todo
    );

    setTodos(updatedTodos);
    Alert.alert("Todo Completed", "Well Done!");
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    Alert.alert("Todo Deleted", "Todo deleted successfully!");
  };

  return (
    <View style={styles.container}>
      {/* todo heading  */}
      <Heading />

      {/* todo lists */}
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />

      {/* todo input */}
      <TodoInput addTodo={addTodo} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
