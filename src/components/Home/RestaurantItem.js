import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurants = [
  {
    name: 'Beachside Bar',
    image_url:
      'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: 'Benihana',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      'https://media-cdn.tripadvisor.com/media/photo-s/1b/67/cc/f8/chestnut-restaurant.jpg',
    categories: ['Indian', 'Bar'],
    price: '$$',
    reviews: 700,
    rating: 4.9,
  },
];

const RestauranItem = ({navigation, ...props}) => {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          activeOpacity={1}
          style={{marginBottom: 30}}
          key={index}
          onPress={() =>
            navigation.navigate('RestaurantDetail', {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.reviews,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }>
          <View style={{backgroundColor: 'white', padding: 15, marginTop: 10}}>
            <RestauranImage image={restaurant.image_url} />
            <RestaurantInfo text={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default RestauranItem;

const RestauranImage = props => {
  return (
    <>
      <Image
        source={{
          uri: props.image,
        }}
        style={{width: '100%', height: 180}}
      />
      <TouchableOpacity style={{position: 'absolute', top: 20, right: 20}}>
        <MaterialCommunityIcons name="heart-outline" size={24} color={'#fff'} />
      </TouchableOpacity>
    </>
  );
};

const RestaurantInfo = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
      }}>
      <View>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{props.name}</Text>
        <Text style={{color: 'grey', fontSize: 13}}>30-45 - min</Text>
      </View>
      <View
        style={{
          backgroundColor: '#eee',
          width: 30,
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
        }}>
        <Text>{props.rating}</Text>
      </View>
    </View>
  );
};
