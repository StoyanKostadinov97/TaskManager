import { Button, StyleSheet, Text, View, Image, FlatList, ImageStore } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import DayOfWeek from "./components/DaysOfWeek";

export default function App() {
  function formatCurrentDate() {
    let date = new Date().toString().split(" ");
    return date[1] + ", " + date[3];
  }

  function daysOfCurrentWeek() {
    let date = new Date();
    let first = new Date(date.setDate(date.getDate() - date.getDay()));
    console.log(new Date(first).toUTCString());

    let daysToRender = [];
    for (let i = 1; i <= 7; i++) {
      let info = first.toUTCString().split(" ");
      daysToRender.push({ day: info[0].split(",")[0], number: info[1] });
      first = new Date(first.setDate(first.getDate() + 1));
    }
    return daysToRender;
  }
  let week = daysOfCurrentWeek();
  debugger;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.navigationContainer}>
          <Image
            style={styles.iconBack}
            source={require("./assets/images/arrowBack.png")}
          />
          <Image
            style={styles.iconSearch}
            source={require("./assets/images/search.png")}
          />
        </View>

        <View style={styles.mainNavigationContainer}>
          <Text style={styles.currentDate}>{formatCurrentDate()}</Text>
          <LinearGradient colors={['#9C2CF3','#3A49F9']} style={styles.button}>
            <Image
            style={styles.iconPlus}
              source={require('./assets/images/plus.png')}
            />
            <Text style = {styles.whiteText}>Add Task</Text>
          </LinearGradient>
        </View>

        <View style={styles.calendarNavigationContainer}>
          <FlatList
            style={styles.weekList}
            horizontal={true}
            data={week}
            renderItem={(item) => {
              debugger;
              return (
                <DayOfWeek day={item.item.day} number={item.item.number} />
              );
            }}
          />
        </View>
      </View>

      <View style={styles.mainContainer}>
          <Text style={styles.taskHeader}> Tasks </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#D8DEF3",
  },

  headerContainer: {
    flex: 1,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomColor: "white",
    width: "100%",
  },
  navigationContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconBack: {
    width: 20,
    height: 15,
    marginTop: 20,
    marginHorizontal: 20,
  },
  iconSearch: {
    width: 30,
    height: 30,
    marginTop: 20,
    marginHorizontal: 20,
  },
  iconPlus:{
    width:10,
    height: 10
  },
  mainNavigationContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 30,
    flexDirection:'row'
  },
  whiteText:{
    color: 'white',
    marginHorizontal: 5
  },
  currentDate: {
    fontWeight: "800",
    fontSize: 30,
  },
  calendarNavigationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  weekList: {
    marginHorizontal: 20,
  },

  mainContainer: {
    flex: 2,
    width: "100%",
  },
  taskHeader: {
    margin: 30,
    fontWeight: 'bold',
    fontSize: 20
  },
});
