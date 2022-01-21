import {View, Text} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesing from 'react-native-vector-icons/AntDesign';

const SearchBar = ({cityHandler}) => {
  return (
    <View style={{flexDirection: 'row', marginTop: 15}}>
      <GooglePlacesAutocomplete
        query={{key: 'AIzaSyCQxYUCGqqRf4E9OMFqMJX9k9KfGY5w6VU'}}
        onPress={(data,details=null)=>{
          console.log(data.description)
          const city = data.description.split(',')[0]
          cityHandler(city)
        }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#eee',
            borderRadius: 50,
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{marginLeft: 10}}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 8,
              padding: 9,
              backgroundColor: 'white',
              borderRadius: 30,
            }}>
            <AntDesing name="clockcircle" size={11} style={{marginRight: 6}} />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;
