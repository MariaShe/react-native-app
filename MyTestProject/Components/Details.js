import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const Details = (props) => {
    
    const picture = props.navigation.getParam('picture', 'nothing sent');
    const name =  props.navigation.getParam('name', 'nothing sent');
    const height = props.navigation.getParam('height', 'nothing sent');
    const type =  props.navigation.getParam('type', 'nothing sent');
    const weight = props.navigation.getParam('weight', 'nothing sent');
    const description = props.navigation.getParam('description', 'nothing sent');

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: `https://gabbyapp.com/${picture}`}}
            />
            <Text style={styles.text}>Name: {name}</Text>
            <Text style={styles.text}>Height: {height}</Text>
            <Text style={styles.text}>Weight: {weight}</Text>
            <Text style={styles.text}>Description: {description}</Text>
            <Text style={styles.text}>Type: {type}</Text>
        </View>
    
    );
};

export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    image: {
        width: 200,
        height: 200,
    },
    text: {
        fontSize: 22,
        marginBottom: 15,
        textAlign: 'center'
    },
});