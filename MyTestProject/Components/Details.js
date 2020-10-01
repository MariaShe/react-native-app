import React from 'react';
import { View, Text } from 'react-native';

const Details = (props) => {

    const [details, setDetails] = useState([]);

    useEffect(() => { findPokemonDetails(); }, []);
    
    const findPokemonDetails = () => {
        const {state} = props.navigation;
        fetch(`https://gabbyapp.com/pockemons/${state.params.pokemon}`)
          .then(res => res.json())
          .then(details => setDetails(details));
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: `pockemons/i/${details.name}.png`,
                }}
            />
            <Text style={styles.text}>Name: {details.name}</Text>
            <Text style={styles.text}>Height: {details.height}</Text>
            <Text style={styles.text}>Weight: {details.weight}</Text>
            <Text style={styles.text}>
                Description: {details.descriptions[0].description.name}
            </Text>
            <Text style={styles.text}>Type: {details.types[0].type.name}</Text>
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
        },
    });