import React, { useState } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
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
  const listClick = async (cityname:string) => {
    setCity(cityname)
    navigation.navigate("WeatherDetail", { city: cityname })
  }


  return (
    <>
      <View style={{ flex: 1 }}>
        <ImageBackground source={{ uri: "https://c8.alamy.com/comp/2B23YW6/gorgeous-cloudscape-in-springtime-weather-background-with-dynamic-cloud-arrangement-on-a-blue-sky-sunny-and-windy-day-good-weather-forecast-concept-2B23YW6.jpg" }} resizeMode="cover" style={{
          flex: 1,
          justifyContent: "center", height: 900, width: 800
        }}>
          <View style={{ height: 50, width: 50, borderColor: "black" }}>

            <View style={{ marginTop: 20 }}>
              <SearchBar
                value={city}
                onChangeText={(text:string) => fetchCities(text)}
              />
              <Button
                disabled={city.length > 0 ? false : true}
                icon="content-save"
                mode="contained"
                theme={{ colors: { primary: "#00aaff" } }}
                style={{ margin: 20, width: 120, justifyContent: "center", marginLeft: 130, borderRadius: 8 }}
                onPress={() => btnClick()}>
                <Text style={{ color: "white", fontSize: 15, }}>Search</Text>

              </Button>

              {Object.values(cities).map((item, i) =>
                <Card onPress={() => listClick(item.capital)} key={i} style={{
                  justifyContent: "center", backgroundColor: 'white', elevation: 20,
                  shadowColor: '#52006A', marginLeft: 90, width: 200, height: 100, marginBottom: 20, padding: 25, borderRadius: 8
                }}>
                  <View style={{ flexDirection: "row" }}  >
                    <Text style={{ fontWeight: 'bold', color: 'black', }}>Capital:{item.capital}</Text>
                  </View>
                  <View>
                    <Text style={{ fontWeight: 'bold', color: 'black', }}>Population:{item.population}</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontWeight: 'bold', color: 'black', }}>Flag</Text>
                    <Image style={{ width: 30, height: 30, marginLeft: 10 }} source={{ uri: item.flags.png }} />
                  </View>
                </Card>)}
            </View>
          </View>
        </ImageBackground>
      </View>
    </>

  );
};

export default HomePage;


