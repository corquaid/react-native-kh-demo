import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Product } from '../../types'
import { getAllCategoryProducts } from '../../api'
import ProductCard from '../ProductCard'
import { capitalizeWords } from '../../utils'

interface CategoryProps {
  category: string
}

export default function Category(props: CategoryProps) {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCategoryProducts(props.category)
      setProducts(data)
    }
    fetchData().catch(console.error)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{capitalizeWords(props.category)}</Text>
      <FlatList
        horizontal
        data={products}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <ProductCard product={item} />
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        style={{}}
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
