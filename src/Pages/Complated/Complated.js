import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';

import {useSelector} from 'react-redux';

const Complated = () => {
  const todos = useSelector(state => state.todos.removedItems);

  const renderItem = ({item}) => {
    return (
      <View style={{padding: 7}}>
        <View style={styles.todos_container}>
          <Text style={styles.todo_text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.flatList_container}>
        <FlatList data={todos} renderItem={renderItem} />
      </View>
    </View>
  );
};

export default Complated;

let w = Dimensions.get('screen').width;
let h = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
