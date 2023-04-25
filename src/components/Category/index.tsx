import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Product } from '../../types'
import { getAllCategoryProducts } from '../../api'
import { ProductCard } from '../ProductCard'
import { capitalizeWords, checkFavourite } from '../../utils'
import { useSelector } from 'react-redux'
import { selectFavourites } from '../../redux/selectors'

interface CategoryProps {
  category: string
}

export default function Category(props: CategoryProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)

  const favourites = useSelector(selectFavourites)
  console.log(favourites)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const data = await getAllCategoryProducts(props.category)
      setProducts(data)
      setLoading(false)
    }
    fetchData().catch(console.error)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{capitalizeWords(props.category)}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        renderItem={({ item }) => {
          return (
            <View style={styles.cardContainer}>
              {loading ? (
                <ActivityIndicator size="large" />
              ) : (
                <ProductCard product={item} isFavourite={checkFavourite(favourites, item)} />
              )}
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  cardContainer: {
    width: 110,
    marginRight: 16,
  },
  heading: {
    color: 'white',
    fontFamily: '',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
})
