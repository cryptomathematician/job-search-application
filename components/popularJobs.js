import React from 'react'
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';

function PopularJobs() {
  const images = [
    { src: require('../assets/burger.png'), job: 'Jr Executive', company: 'Burger King', place: "Los Angels, US", salary: "$96,000/y", backgroundColor: '#F7F0E8' },
    { src: require('../assets/image 8.png'), job: 'Product Manager', company: 'Beats', place: "Florida, US", salary: "$84,000/y", backgroundColor: '#F7F0E8' },
    { src: require('../assets/Vector.png'), job: 'Product Manager', company: 'Facebook', place: "Florida, US", salary: "$86,000/y", backgroundColor: '#F7F0E8' },
    { src: require('../assets/google.png'), job: 'Product Manager', company: 'Google', place: "Accra, Ghana", salary: "$160,000", backgroundColor: '#F7F0E8' },
    { src: require('../assets/google.png'), job: 'Product Manager', company: 'Google', place: "Accra, Ghana", salary: "$160,000", backgroundColor: '#F7F0E8' },
    { src: require('../assets/google.png'), job: 'Product Manager', company: 'Google', place: "Accra, Ghana", salary: "$160,000", backgroundColor: '#F7F0E8' },
    { src: require('../assets/google.png'), job: 'Product Manager', company: 'Google', place: "Accra, Ghana", salary: "$160,000", backgroundColor: '#F7F0E8' },
    { src: require('../assets/google.png'), job: 'Product Manager', company: 'Google', place: "Accra, Ghana", salary: "$160,000", backgroundColor: '#F7F0E8' },
    // Add more images as needed
];
  return (
    <View styles={styles.container}>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Popular Jobs</Text>
          <Text style={styles.footerLink}>See all</Text>
        </View>
        <FlatList
        data={images}
        renderItem={({ item }) => (
          <View style={[styles.imageContainer, { backgroundColor: item.backgroundColor }]}>
            <View style={styles.smallContainer}>
            <Image source={item.src} style={styles.categoryImage} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.imageText}>{item.job}</Text>
            <Text style={styles.imageTask}>{item.company}</Text>
            <View style={styles.locationSalaryContainer}>
              <Text style={styles.imageSalary}>{item.salary}</Text>
              <Text style={styles.imagePlace}>{item.place}</Text>
            </View>
          </View>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footerContainer: {
    marginLeft: 140
  },
    footerText: {
      fontSize: 17,
      fontWeight: 'bold',
      paddingTop: 40,
      top: 20,
      left: -120
  },
  footerLink: {
      fontSize: 14,
      color: 'black',
      top: 0,
      left: 180
  }, 
  imageContainer: {
    borderRadius: 24,
    padding: 7,
    width: 350,
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginHorizontal: 10,
    paddingBottom: 10,
    borderWidth: 0.5,
    marginBottom: 10
  }, 
  categoryImage: {
    width: 50,
    height: 50,
  },
  imageText:{
    left: 70,
    marginTop: -60,
    fontWeight: 'bold'
  },
  imageTask:{
    left: 70
  },
  locationSalaryContainer: {
    left: 220,
    top: -35
  },
  imageSalary: {
    fontWeight: 'bold'
  }
});

export default PopularJobs

