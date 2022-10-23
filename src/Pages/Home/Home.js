import {
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {addTodo, remove, removedItem} from '../../redux/todos/todosSlice';

const Home = () => {
  const todos = useSelector(state => state.todos.items);
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const renderItem = ({item}) => {
    return (
      <View style={{padding: 7}}>
        <View style={styles.todos_container}>
          <Text style={styles.todo_text}>{item.text}</Text>
          <TouchableOpacity
            style={styles.remove_button}
            onPress={() => {
              dispatch(removedItem({id: item.id}));
              dispatch(remove(item.id));
            }}>
            <Text style={styles.remove_button_text}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.headerText}> Todos </Text>
      <View style={styles.main_container}>
        <View style={styles.input_container}>
          <TextInput
            style={styles.input}
            placeholder={'Write Something...'}
            placeholderTextColor={'#bdbdbd'}
            onChangeText={setInput}
            value={input}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              dispatch(addTodo({text: input}));
              setInput('');
            }}>
            <Text style={styles.addButton_text}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.leftItem_container}>
          <Text style={styles.leftItem_text}>
            {Object.keys(todos).length} items left
          </Text>
        </View>
        <View style={styles.flatList_container}>
          <FlatList data={todos} renderItem={renderItem} />
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
    marginTop: 5,
  },
  flatList_container: {
    width: w,
    height: h / 1.5,
    borderRadius: 20,
    marginTop: 10,
    alignItems: 'center',
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
    marginBottom: 10,
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
    color: 'black',
  },
  leftItem_container: {
    width: w,
    height: h / 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftItem_text: {
    color: 'gray',
    fontSize: 15,
  },
});
