import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Card } from 'react-native-paper';

import { RootObject } from '../Assets/Types/HomePageType';
import SearchBar from '../Components/SearchBar';

const HomePage = ({ navigation }) => {
  const [city, setCity] = useState<String>("");
  const [cities, setCities] = useState({} as RootObject)
  const btnClick = async () => {

    navigation.navigate("WeatherDetail", { city: city })
  }
  const fetchCities = async (text: string) => {
    setCity(text)
    await fetch(`https://restcountries.com/v3.1/name/${text}`).then((item) => item.json()).then((citydata) => setCities(citydata.slice(0, 9)))
  }
  const listClick = async (cityname) => {
    setCity(cityname)
    navigation.navigate("WeatherDetail", { city: cityname })
  }


  return (
    <>
      <View style={{ height: 50, width: 50, borderColor: "black", flex: 1 }}>
        <SearchBar
          value={city}
          onChangeText={(text: string) => fetchCities(text)}
        />
        <Button
          icon="content-save"
          mode="contained"
          theme={{ colors: { primary: "#00aaff" } }}
          style={{ margin: 20 }}
          onPress={() => btnClick()}>
          <Text style={{ color: "white" }}>save changes</Text>

        </Button>

        {Object.values(cities).map((item: RootObject, i) => <Card
          style={{ margin: 2, padding: 12 }}
          onPress={() => listClick(item.capital)}
        ><View style={{ flex: 1 }}><Text>"Capital":{item.capital}</Text><Text>"population":{item.population}</Text><Image style={{ width: 50, height: 200 }}
          source={{ uri: `${item.flags.png}` }} /></View></Card>)}



      </View>
    </>

  );
};

export default HomePage;


