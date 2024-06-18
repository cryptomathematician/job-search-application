import { ScrollView, StyleSheet, Text, View, Image, TextInput, FlatList, Button } from 'react-native';
import React from 'react';
import Search from './components/search';
import CategoryImage from './components/cardsImage';
import PopularJobs from './components/popularJobs';


export default function HomeScreen({ route }) {
  const { name, email } = route.params;
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} >
      <View style={styles.devProfile}>
        <View style={styles.profileImage}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
          </View>
          <View style={styles.profiles}>
            <Image source={require('./assets/Ellipse.png')} style={styles.profile} />
            <Image source={require('./assets/Ellipse86.png')}  style={styles.profile1}/>
            <Image source={require('./assets/Ellipse8.png')} style={styles.profile2} />
          </View>
        </View>
      </View>
      <Search />
      <CategoryImage />
      <PopularJobs />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    alignItems: 'center',
    paddingBottom: 40,
    paddingTop: 0,
  },
  devProfile: {
    width: '100%',
    height: 52,
    marginVertical: 50, // equivalent to gap
    top: 0,
    left: 30,
    marginLeft: 5
  },
  name: {
    fontSize: 36,
    fontWeight: 'bold'
  },
  email: {
    fontSize: 24,
    color: '#95969D'
  },
  profileImage: {
    flexDirection: 'row', // Added this line to make the elements row-based
    alignItems: 'center', // Vertically center the elements
    justifyContent: 'space-between', // Distribute the elements with space between
  },
  profile: {
    right: 40,
  },
  profile1: {
    right: 0,
    top: -50
  },
  profile2: {
    right: 0,
    top: -60
  },
  profiles: {
    top: 10
  }
});
