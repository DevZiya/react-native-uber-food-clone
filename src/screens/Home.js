import {SafeAreaView, ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderTabs from '../components/Home/HeaderTabs';
import SearchBar from '../components/Home/SearchBar';
import Categories from '../components/Home/Categories';
import BottomTabs from '../components/Home/BottomTabs';
import RestaurantItem, {
  localRestaurants,
} from '../components/Home/RestaurantItem';
import {Divider} from 'react-native-elements/dist/divider/Divider';

const YELP_API_KEY =
  'XJ7V3XDULXqBHPmnkjN1c5lwxYOtFV-wiRmh8Mr5sF7zLHy_tNO9jJDglID9tAft3RKNJkYMseZswOj3fYfKVGApKWaLXN4O30aSt1UG1UcNbYco3oM1isTbd27oYXYx';

const Home = ({navigation}) => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState('San Francisco');
  const [activeTab, setActiveTab] = useState('Delivery');

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then(res => res.json())
      .then(json =>
        setRestaurantData(
          json.businesses.filter(busines =>
            busines.transactions.includes(activeTab.toLowerCase()),
          ),
        ),
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Home;
