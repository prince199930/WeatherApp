import React from 'react';
import { TextInput, View } from 'react-native';

const SearchBar = ({ value, onChangeText }) => {
  const color = {
    black: '#000000',
  }
  return (
    <View >
      <TextInput
        value={value}
        placeholder="Search Here"
        placeholderTextColor={color.black}
        style={{
          margin: 15,
          height: 40,
          borderColor: '#7a42f4',
          borderWidth: 1
        }}
        onChangeText={onChangeText}

      />

    </View>
  );
};

export default SearchBar;

