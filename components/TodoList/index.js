import React from "react";
import { ScrollView, View, Text } from "react-native";
import styles from "./styles";

import TodoItem from "./TodoItem";

const TodoList = ({ todos, completeTodo, deleteTodo }) => {
  return (
    <View style={styles.todoList}>
      <ScrollView
        style={{
          paddingHorizontal: 30,
        }}
      >
        {todos.length === 0 ? (
          <View style={{ alignItems: "center" }}>
            <Text>No todos found</Text>
          </View>
        ) : (
          todos.map((todo, index) => (
            <TodoItem
              key={index}
              id={index}
              todo={todo}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default TodoList;
