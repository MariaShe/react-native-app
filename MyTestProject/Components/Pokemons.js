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

    useEffect(() => { findPokemons(); }, []);
    
    const findPokemons = () => {
        fetch('https://gabbyapp.com/pockemons/data.json')
          .then(response => response.json())
          .then(pokemons => setPokemons(pokemons.results));
      };

    return (
        <View>
          <View style={styles.header}>
            <Text>Pokemons</Text>
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
                          pokemon: pokemon.name,
                        })
                      }>
                      <Image
                        style={styles.image}
                        source={{
                          url: `pockemons/i/${pokemon.name}.png`,
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
        position: 'absolute',
        marginBottom: 70,    
        left: '20%',    
        zIndex: 1,    
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
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    image: {
        width: 150,
        height: 150,
    }

   
  });