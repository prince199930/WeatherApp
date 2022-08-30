import { View, Text, Image, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { RouteProp } from '@react-navigation/native';
import { CityType } from './HomePage';

const WeatherDetail = (props) => {
  const [info, setInfo] = useState({
    temperature: "loading!!",
    weather_icons: "loading!!",
    wind_speed: "loading!!",
    precip: "loading!!",
  })


  const getWeatherData = async () => {
    const route = useRoute<RouteProp<Record<string, CityType>, string>>();
 
    let MyCity = route.params.city
  


    let respeonse = await fetch(`http://api.weatherstack.com/current?access_key=719e1e14d5ecbad555d7a6a66c8211ac&query=${MyCity}`)
   
    let data = respeonse.json().then(res => {
      setInfo({
        temperature: res.current.temperature, 
        weather_icons: res.current.weather_icons,
        wind_speed: res.current.wind_speed,
        precip: res.current.precip
      })
    }).catch(err => {
      alert(err.message)
    })



  }

  if (props.route.params !== "Delhi") {
    getWeatherData()
  }

  useEffect(() => {
    getWeatherData()
  }, [])


  return (
    <>
      <View>
        <ImageBackground source={{ uri: "https://www.cambridge.org/elt/blog/wp-content/uploads/2019/02/background-3268840_1920.jpg" }} style={{ justifyContent: "center", height: 900 }}>
          <View style={{ flexDirection: "column", marginTop: -400, }}>
            <View>
              <Text style={{ fontWeight: 'bold', color: '#ccc', marginLeft: 110, fontSize: 25 }}>
                WeatherDetail
              </Text>
            </View>
            <View style={{
              flexDirection: "column", borderRadius: 8, width: 300, marginLeft: 50, marginTop: 220, backgroundColor: 'white', elevation: 20,
              shadowColor: '#52006A',
            }}>
              <View style={{ flexDirection: "row", paddingLeft: 25, paddingTop: 10, paddingBottom: 10 }}>
                <Text style={{ fontWeight: 'bold', color: 'black', }}>Temperature:</Text>
                <Text style={{ fontWeight: 'bold', color: 'black', marginLeft: 10 }}>{info.temperature}</Text>
              </View>
              <View style={{ flexDirection: "row", paddingLeft: 25, paddingTop: 10, paddingBottom: 10 }}>
                <Text style={{ fontWeight: 'bold', color: 'black', }}>Weather Icon</Text>
                <Image style={{ width: 30, height: 30, }}
                  source={{ uri: `${info.weather_icons} `}} />
              </View>
              <View style={{ flexDirection: "row", paddingLeft: 25, paddingTop: 10, paddingBottom: 10 }}>
                <Text style={{ fontWeight: 'bold', color: 'black', }}>Wind Speed:</Text>
                <Text style={{ fontWeight: 'bold', color: 'black', marginLeft: 10 }}>{info.wind_speed}</Text>
              </View>
              <View style={{ flexDirection: "row", paddingLeft: 25, paddingTop: 10, paddingBottom: 10 }}>
                <Text style={{ fontWeight: 'bold', color: 'black', }}>Precipitation:</Text>
                <Text style={{ fontWeight: 'bold', color: 'black', marginLeft: 10 }}>{info.precip}</Text>
              </View>


            </View>
          </View>
        </ImageBackground>
      </View>

    </>

  )
}

export default WeatherDetail;