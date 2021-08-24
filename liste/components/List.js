import React,{useState, useEffect} from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';

export default function List() {
    const [countries, setCountries]= useState([]);

    useEffect(() => {
        getContries();
        }, []);
        
        const getContries = (() => {
            fetch("http://restcountries.eu/rest/v2/all") 
            .then((res) => res.json()) 
            .then((res) => { 
                setCountries(res); 
            });
            })
          const renderCountries = ({ item }) => {
            return <Text style={styles.Text}>{item.name} {item.capital}</Text>;
        };
    return(
        <View>
            <FlatList
                style={styles.list}
                data={countries}
                renderItem={renderCountries}
                keyExtractor={(item, index) => index} />
        </View>
    )
}
    const styles = StyleSheet.create({
        list: {
            margin: 20,
            borderBottomColor: 'black'
        },
        Text: {
            fontSize : 15,
            paddingTop: 10,
        }
    });
