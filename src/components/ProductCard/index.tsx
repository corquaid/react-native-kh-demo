import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { Product } from '../../types'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../navigation/Routes'
import { StackNavigationProp } from '@react-navigation/stack'

interface ProductCardProps {
  product: Product
}

export default function ProductCard(props: ProductCardProps) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Pressable onPress={() => navigation.navigate("Detail",  { productId: props.product.id })}>
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
      <Text style={styles.price}>${props.product.price.toFixed(2)}</Text>
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
  },
  image: {
    height: 100,
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
})
