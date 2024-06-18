import React from 'react'
import {View, Image, TextInput, StyleSheet} from 'react-native';



function Search() {
  return (
    <View style={styles.searchBar}>
        <Image name="search" size={20} color="gray" style={styles.icon} source={require('../assets/search.png')} />
        <TextInput style={styles.input} placeholder="Search a job or position" />
        <Image name="filter" size={20} color="gray" style={styles.picture} source={require('../assets/filter.png')}/>
    </View>
  )
}

const styles = StyleSheet.create({
    searchBar: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 10,
      backgroundColor: '#F2F2F3',
      width:300,
      height: 48,
      marginLeft: -60
    },
    icon: {
      marginHorizontal: 13,
    },
    input: {
      flex: 1,
      fontSize: 16,
    },
    picture:{
      marginRight:-70,
      backgroundColor: "#F2F2F3",
      height: 45,
      width: 44,
      borderRadius: 10,
    },
});
  

export default Search