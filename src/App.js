import React, { useState } from 'react';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  FlatList,
  Dimensions,
} from 'react-native';

function Main() {
  const [todos, settodos] = useState('');
  const [list, setlist] = useState([]);

  const renderTodo=({item})=>{
    return(
    <View style={styles.todoFlat}>
    <TouchableOpacity 
    key={item.key}
    activeOpacity={0.5}
    onPress={()=>removeItem(item.key)}
    >
    <View>
    <Text style={styles.todoText}>{item.todoText}</Text>
    </View>
    </TouchableOpacity>
    </View>
   
    )  
  }
  
  const removeItem=(itemKey)=>{

   setlist(listo=>list.filter(item=>item.key!=itemKey))
  }


  const AddtoList = () => {
    const todoObj={
      id:Math.random(),
      todoText:todos,
      isDone:false
    }
    setlist([...list, todoObj]);
    settodos('');
  };

  return (
    
    <View style={styles.container}>
     <View syle={styles.container}>
        <Text style={styles.title}>TODO</Text>
        
      </View> 
    
      <FlatList 
      testID="list"
      data={list}
      keyExtractor={(item,index)=>index.toString()}
      renderItem={renderTodo}
      />
   
      
      <View style={styles.panelcontainer}>
        <TextInput
          testID="input"
          style={styles.input}
          placeholder={'Add to TODO'}
          onChangeText={(text) => settodos(text)}
          value={todos}
        />
        <TouchableOpacity 
        testID="button"
        onPress={AddtoList}
        activeOpacity={0.5} >
        <View style={styles.buttonContainer}>
      <Text>  Hi! Add to Todo </Text>   
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  todoText:{
    fontSize:12,
    color:'white',
  },
  todoFlat:{
    backgroundColor:'orange',
    width:'%100',
    alignItems:'center',
    margin:10,
    padding:10,
    borderRadius:10,
  },
  title: {
    padding:50  ,
    fontSize: 45,
    color: 'orange',
    
    
  },
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  panelcontainer: {
    width: '70%',
  },
  input: {
    borderWidth: 2,
    padding: 10,
    width: '100%',
    fontSize: 16,
    borderRadius:10,
  },
  buttonContainer: {
    padding: 15,
     width: '60%',
     marginLeft:65,
    margin:40,
    fontSize: 15,
    borderRadius:40,
    backgroundColor: 'orange',
  },
});

export default Main;
