import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const WeatherDetail = (props) => {
  const [info, setInfo] = useState({
    temperature: "loading!!",
    weather_icons: "loading!!",
    wind_speed: "loading!!",
    precip: "loading!!",
  })

  const getWeatherData = async () => {
    let MyCity

    const { city } = props.route.params
    MyCity = city

    await fetch(`http://api.weatherstack.com/current?access_key=ab6ee37c610f0496c4fd1141bbe31b02&query=${MyCity}`).then(data => data.json()).then((result) => {
      setInfo({
        temperature: result.current.temperature,
        weather_icons: result.current.weather_icons,
        wind_speed: result.current.wind_speed,
        precip: result.current.precip
      })
    })

  }
  if (props.route.params !== "Delhi") {
    getWeatherData()
  }


  useEffect(() => {
    getWeatherData()
  }, [])


  return (
    <View style={{ flex: 1 }}>
      <Text>WeatherDetail</Text>
      <Text style={{
        color: '#00aaff',
        marginTop: 30,
        fontSize: 30
      }}>{info.temperature}</Text>
      <Image style={{ width: 50, height: 200 }}
        source={{ uri: `${info.weather_icons}` }} />
      <Text style={{
        margin: 5,
        padding: 12
      }}>{info.wind_speed}</Text>
      <Text style={{
        margin: 5,
        padding: 12
      }}>{info.precip}</Text>
    </View>
  )
}

export default WeatherDetail;