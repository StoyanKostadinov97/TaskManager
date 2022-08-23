import { StyleSheet, View, Text } from 'react-native';

function DayOfWeek(props) {
    debugger;
  return (
    <View style={styles.dayContainer}>
      <Text style={styles.dayText}>
        {props.day}
      </Text>
      <Text style={styles.dayNumber}>
        {props.number}
      </Text>
    </View>
  );
}

export default DayOfWeek;

const styles = StyleSheet.create({
  dayContainer: {
    padding: 5,
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  dayText: {
    fontWeight: 'bold',
  },
});