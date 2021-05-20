import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const Heading = () => {
  return (
    <View style={styles.heading}>
      <Text style={styles.headingText}>Todo List</Text>
    </View>
  );
};

export default Heading;
