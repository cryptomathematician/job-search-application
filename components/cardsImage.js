import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, ImageBackground } from 'react-native';

function CategoryImage() {
    const images = [
        { src: require('../assets/Vector.png'), job: 'Software Engineering', company: 'Facebook', place: "Accra, Ghana", salary: "$180,000", backgroundColor: '#71a6d2', backgroundImage: require('../assets/background.png') },
        { src: require('../assets/google.png'), job: 'Software Engineering', company: 'Google', place: "Accra, Ghana", salary: "$160,000", backgroundColor: '#00004B', backgroundImage: require('../assets/background.png') },
        { src: require('../assets/google.png'), job: 'Software Engineering', company: 'Google', place: "Accra, Ghana", salary: "$160,000", backgroundColor: '#71a6d2', backgroundImage: require('../assets/background.png') },
        { src: require('../assets/google.png'), job: 'Software Engineering', company: 'Google', place: "Accra, Ghana", salary: "$160,000", backgroundColor: '#71a6d2', backgroundImage: require('../assets/background.png') },
        { src: require('../assets/google.png'), job: 'Software Engineering', company: 'Google', place: "Accra, Ghana", salary: "$160,000", backgroundColor: '#71a6d2', backgroundImage: require('../assets/background.png') },
        { src: require('../assets/google.png'), job: 'Software Engineering', company: 'Google', place: "Accra, Ghana", salary: "$160,000", backgroundColor: '#71a6d2', backgroundImage: require('../assets/background.png') },
        { src: require('../assets/google.png'), job: 'Software Engineering', company: 'Google', place: "Accra, Ghana", salary: "$160,000", backgroundColor: '#71a6d2', backgroundImage: require('../assets/background.png') },
        { src: require('../assets/google.png'), job: 'Software Engineering', company: 'Google', place: "Accra, Ghana", salary: "$160,000", backgroundColor: '#71a6d2', backgroundImage: require('../assets/background.png') },
        // Add more images as needed
    ];

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.feature}>Featured Jobs</Text>
                <Text style={styles.allCards}>See all</Text>
            </View>
            <FlatList
                data={images}
                renderItem={({ item }) => (
                    <View style={[styles.imageContainer, { backgroundColor: item.backgroundColor }]}>
                        <View style={styles.smallContainer}>
                            <Image source={item.backgroundImage} style={styles.backgroundImageStyle} />
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
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 35,
        marginTop: 75,
    },
    feature: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    allCards: {
        fontSize: 14,
        color: 'black',
    },
    imageContainer: {
        borderRadius: 24,
        padding: 20,
        width: 280,
        height: 186,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginHorizontal: 10,
        marginLeft: 30
    },
    smallContainer: {
        borderRadius: 10,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    backgroundImageStyle: {
        resizeMode: 'cover',
    },
    categoryImage: {
        marginBottom: 180,
        width: 30,
        height: 30,
    },
    textContainer: {
        marginLeft: 10,
    },
    imageText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
        top: -70,
        left: 60
    },
    imageTask: {
        color: 'white',
        fontSize: 15,
        marginBottom: 5,
        top: -70,
        left: 60
    },
    locationSalaryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    imagePlace: {
        color: 'white',
        fontSize: 15,
    },
    imageSalary: {
        color: 'white',
        fontSize: 15,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 35,
        marginTop: 20,
    },
});

export default CategoryImage;

