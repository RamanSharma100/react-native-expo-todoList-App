import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  todoList: {
    marginTop: 15,
    height: 380,
  },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
    borderColor: "#000",
    borderWidth: 0.5,
    borderRadius: 10,
    paddingVertical: 10,
  },
  todoItemText: {
    fontSize: 20,
    textTransform: "capitalize",
    textAlign: "center",
  },
  notCompleted: {
    height: 20,
    width: 20,
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 50,
  },
  todoCompleted: {
    borderColor: "#999",
    color: "#999",
  },
});

export default styles;
