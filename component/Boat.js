import React from 'react';
import {View, Text, Image,StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import AllMovies from "../App";

const styles = StyleSheet.create({
    boatContainer: {
        borderWidth: 2,
        borderColor: '#000',
        padding: 10,
        marginBottom: 20,
        backgroundColor: '#f2f2f2',
        width: '90%',
        alignSelf: 'center',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4a4a4a',
        padding: 5,
        borderRadius: 5,
        marginBottom: 10,
        justifyContent: 'center',
    },
    icon: {
        marginRight: 10,
    },
    boatName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    description: {
        fontSize: 14,
        color: '#333',
        backgroundColor: '#e0e0e0',
        padding: 5,
        borderRadius: 5,
        textAlign: 'center',
        marginBottom: 10,
    },
    boatImage: {
        width: '100%',
        height: 200,
        borderRadius: 5,
    },
});

const Boat = ({ name, description, poster, icon_name }) => {
    return (
        <View style={styles.boatContainer}>
            <View style={styles.headerContainer}>
                <Icon name={icon_name} size={20} color="white" style={styles.icon} />
                <Text style={styles.boatName}>{name}</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
            <Image source={poster} style={styles.boatImage} />
        </View>
    );
};

export default Boat;
