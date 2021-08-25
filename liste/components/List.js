import React,{useState, useEffect} from 'react';
import { StyleSheet, FlatList, View, Text, Image, TouchableOpacity } from 'react-native';

export default function List() {
    const [countries, setCountries]= useState([]);
    // const [weather, setWeather]= useState([]);
    // const [pressed, setPressed] = useState(true);

    useEffect(() => {
        getContries();
        // getWeather();
        }, []);
        
        const getContries = (() => {
            fetch("http://restcountries.eu/rest/v2/all") 
            .then((res) => res.json()) 
            .then((res) => { 
                setCountries(res); 
            });
            })

            // const getWeather =(({item}) => {
            //      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${item.capital}&appid=6fe34ca84af8fb9fb507b71a4e864964`)
            //      .then((res) => res.json()) 
            //      .then((res) => { 
            //       setWeather(res);
            //     });
            // })

            // const pressHandle = ()=>{
            //     return <View>
            //         <Text style={styles.Text}>Capital city: {item.capital}</Text>
                    
            //     </View>
            // }
          const renderCountries = ({ item }) => {
            return <View>
                <Text style={styles.Text}>Country Name: {item.name}</Text>
                <TouchableOpacity onPress={()=>console.log('pressed')}>
                <Image source={{uri:item.flag}} style={styles.Image}/>
                </TouchableOpacity>
            </View>
           }
    return(
        <View>
            <FlatList
                style={styles.list}
                data={countries}
                renderItem={renderCountries}
                keyExtractor={(item, index) => index} />
        </View>
        // <View>
        //     <FlatList
        // style={styles.list}
        // data={weather}
        // renderItem={getWeather}
        // keyExtractor={(item, index) => index} />
        // </View>
        
    )
}
    const styles = StyleSheet.create({
        list: {
            margin: 20,
        },
        Text: {
            fontSize : 15,
            paddingTop: 10,
        },
        Image: {
            margin: 10,
            height: 150,
            width: 250,
        }
    });
