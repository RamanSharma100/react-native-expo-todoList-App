import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  todoInput: {
    position: "absolute",
    bottom: 30,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  input: {
    width: "80%",
    marginRight: 15,
  },
  inputInput: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: "#000",
    borderWidth: 1,
  },
  button: {
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: "#000",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 30,
    color: "#fff",
  },
});

export default styles;
