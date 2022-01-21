import {View, Text, Image} from 'react-native';
import React from 'react';

const yelpRestaurantInfo = {
  name:'Favorite Italian kitchen and food',
  image:
    'https://res.cloudinary.com/culturemap-com/image/upload/ar_4:3,c_fill,g_faces:center,w_980/v1627337765/photos/322524_original.jpg',
  price: '$$',
  reviews: '1500',
  rating: '4.5',
  categories: [{title: 'Thai'}, {title: 'Comfort Food'}],
};

const About = ({route}) => {
  const {image, price, reviews, rating, categories,name} = route.params;
  const formattedCategories = categories.map(cat => cat.title).join(' • ');

  const description = `${formattedCategories} ${
    price ? ' • ' + price : ''
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
};

export default About;

const RestaurantImage = props => (
  <Image source={{uri: props.image}} style={{width: '100%', height: 180}} />
);

const RestaurantTitle = props => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: '600',
      marginTop: 10,
      marginHorizontal: 15,
      color: 'black',
    }}>
    {props.name}
  </Text>
);

const RestaurantDescription = props => (
  <Text
    style={{
      fontSize: 15.5,
      fontWeight: '400',
      marginTop: 10,
      marginHorizontal: 15,
    }}>
    {props.description}
  </Text>
);
