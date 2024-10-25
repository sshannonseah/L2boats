import React from 'react';
import {View, Text, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import AllMovies from "../App";

const Boat =({name, description ,poster, icon_name}) => {
    return (
        <View>
            <Image source={poster} style={{width:400, height:500}} />
            <Text>
                {name} {description}
            </Text>
            <Icon name={icon_name} size={50} color="#B23B23" />
        </View>
    );
};

export default Boat;
