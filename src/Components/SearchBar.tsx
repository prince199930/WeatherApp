import React from 'react';
import { TextInput, View } from 'react-native';

const SearchBar = ({ value, onChangeText }) => {
  const color = {
    black: '#000000',
  }
  return (
    <View style={{ display: "flex", justifyContent: "center", marginLeft: 80 }}>
      <TextInput
        value={value}
        placeholder="Enter Country Name"
        placeholderTextColor={color.black}
        style={{
          marginLeft: 10,
          textAlign: 'center',
          margin: 15,
          height: 40,
          width: 230,
          fontSize: 15,
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 8
        }}
        onChangeText={onChangeText}
      />

    </View>
  );
};

export default SearchBar;

