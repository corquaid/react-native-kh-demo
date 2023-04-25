import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { RootStackParamList } from '../../navigation/StackNavigator'
import { Product } from '../../types'
import FavouriteIcon from '../FavouriteIcon'
import { useDispatch } from 'react-redux'
import { addFavourite, removeFavourite } from '../../redux/favouritesSlice'

interface ProductCardProps {
  product: Product
  isFavourite: boolean
}

export function ProductCard(props: ProductCardProps) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const dispatch = useDispatch()

  const toggleFavourite = () => {
    if (!props.isFavourite) {
      dispatch(addFavourite(props.product))
    } else {
      dispatch(removeFavourite(props.product.id))
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Pressable
          onPress={() =>
            navigation.navigate('Detail', { product: props.product, isFavourite: props.isFavourite })
          }
        >
          <Image
            source={{ uri: props.product.image }}
            style={styles.image}
            resizeMode="contain"
          />
        </Pressable>
      </View>
      <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
        {props.product.title}
      </Text>
      <View style={styles.priceRow}>
        <Text style={styles.price}>€{props.product.price.toFixed(2)}</Text>
        <Pressable onPress={toggleFavourite}>
          <FavouriteIcon iconName={props.isFavourite ? 'heart' : 'hearto'} size={16} />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    paddingVertical: 8,
    marginRight: 16,
  },
  imageContainer: {
    borderRadius: 6,
    backgroundColor: 'white',
    padding: 4,
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 100,
  },
  title: {
    color: 'white',
    paddingTop: 10,
  },
  price: {
    color: 'white',
    paddingTop: 4,
    fontWeight: 'bold',
  },
  priceRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
