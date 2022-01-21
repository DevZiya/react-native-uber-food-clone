import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../Redux/cartReducer';

const MenuItem = ({restaurantName, foods, hideCheckbox, marginLeft}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.selectedItems.items);
  const isFoodCart = (cartItems, food) =>
    Boolean(cartItems.find(find => find.food.title === food.title));

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemsStyle}>
            {hideCheckbox ? (
              <></>
            ) : (
              <BouncyCheckbox
                iconStyle={{borderColor: 'lightgray'}}
                fillColor="green"
                onPress={checkboxValue =>
                  dispatch(addToCart({food, restaurantName, checkboxValue}))
                }
                isChecked={isFoodCart(cartItems, food)}
              />
            )}
            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{marginHorizontal: 20}}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default MenuItem;

const FoodInfo = props => (
  <View style={{width: 235, justifyContent: 'space-evenly'}}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = ({marginLeft, ...props}) => (
  <View>
    <Image
      source={{uri: props.food.image}}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft: marginLeft,
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  menuItemsStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: '600',
  },
});
