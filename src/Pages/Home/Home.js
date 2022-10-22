import {
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View>
      <Text style={styles.headerText}> Todos </Text>
      <View style={styles.main_container}>
        <View style={styles.input_container}>
          <TextInput
            style={styles.input}
            placeholder={'Write Something...'}
            placeholderTextColor={'#bdbdbd'}
          />
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButton_text}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.todos_container}>
          <Text style={styles.todo_text}>Yürüyüşe Çık</Text>
          <TouchableOpacity style={styles.remove_button}>
            <Text style={styles.remove_button_text}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;

let w = Dimensions.get('screen').width;
let h = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  headerText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 50,
    fontWeight: '200',
    marginTop: 20,
  },
  main_container: {
    flex: 1,
    alignItems: 'center',
  },
  todos_container: {
    flexDirection: 'row',
    width: w / 1.2,
    height: h / 12,
    backgroundColor: '#ebebeb',
    justifyContent: 'flex-start',
    borderRadius: 20,
    alignItems: 'center',
    elevation: 5,
    marginTop: 10,
  },
  todo_text: {
    color: 'black',
    fontSize: 20,
    width: w / 1.5,
    paddingLeft: 10,
  },
  remove_button: {
    backgroundColor: '#d6d6d6',
    width: 60,
    height: 35,
    borderRadius: 10,
    justifyContent: 'center',
  },
  remove_button_text: {
    color: 'black',
    textAlign: 'center',
  },
  input_container: {
    width: w / 1.2,
    height: h / 13,
    flexDirection: 'row',
    backgroundColor: '#ebebeb',
    elevation: 5,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  addButton: {
    backgroundColor: '#d6d6d6',
    width: 60,
    height: 35,
    borderRadius: 10,
    justifyContent: 'center',
  },
  addButton_text: {
    color: 'black',
    textAlign: 'center',
  },
  input: {
    width: w / 1.5,
    paddingLeft: 10,
  },
});
