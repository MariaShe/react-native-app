import React, { useState, useEffect } from 'react';
import {
    View, 
    Text, 
    ScrollView, 
    Image, 
    TouchableOpacity, 
    StyleSheet
} from 'react-native';


const Pokemons = (props) => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => { fetchPokemons(); }, []);
    
    const fetchPokemons = () => {
        fetch('https://gabbyapp.com/pockemons/data.json')
          .then(response => response.json())
          .then(pokemons => setPokemons(pokemons));
      };

    return (
        <View>
          <View>
            <Text style={styles.header}>Pokemons</Text>
          </View>
          <ScrollView>
            <View style={styles.container}>
              {pokemons.map((pokemon, index) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.5}
                      key={index}
                      style={styles.card}
                      onPress={() =>
                        props.navigation.navigate('Details', {
                          picture: pokemon.picture,
                          name: pokemon.name,
                          type: pokemon.type,
                          height: pokemon.height,
                          weight: pokemon.weight,
                          description: pokemon.description,
                        })
                      }>
                      <Image
                        style={styles.image}
                        source={{
                          uri: `https://gabbyapp.com/${pokemon.picture}`,
                        }}
                      />
                      <Text>{pokemon.name}</Text>
                    </TouchableOpacity>
                  );
                })}
            </View>
          </ScrollView>
        </View>
      );
};

export default Pokemons;

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        fontSize: 25,
        marginTop: 10,   
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 30,
    },
    card: {
        display: 'flex',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10,        
    },
    image: {
        width: 150,
        height: 150,
    }
   
});