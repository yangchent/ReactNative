import React,{useState, useEffect} from 'react';
import { StyleSheet, FlatList, View, Text, Image, TouchableOpacity } from 'react-native';

export default function List() {
    const [countries, setCountries]= useState([]);
    const [selectedCapital, setSelectedCapital]= useState([]);
    const [weather, setWeather]= useState([]);
    const [pressed, setPressed] = useState(false);

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

            const getWeather =((capital) => {
                 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=6fe34ca84af8fb9fb507b71a4e864964`)
                 .then((res) => res.json()) 
                 .then((res) => { 
                  setWeather(res.main.temp);
                });
            })

            const pressHandle = (capital)=>{
                    setPressed(true);
                    getWeather(capital)
            }
          const renderCountries = ({ item }) => {
              setSelectedCapital(item.capital);
            return <View>
                <Text style={styles.Text}>Country Name: {item.name}</Text>
                <TouchableOpacity onPress={()=>pressHandle(item.capital)}>
                <Image source={{uri:item.flag}} style={styles.Image}/>
                </TouchableOpacity>
                {pressed? 
                <View>
                    <Text style={styles.Text}>Capital city: {item.capital}</Text>
                    <Text>Temperature :{weather}</Text>
                </View>
                : null }
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
