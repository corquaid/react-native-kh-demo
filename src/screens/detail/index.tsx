import { Text, View, StyleSheet, Image } from 'react-native'
import { RootStackParamList } from '../../navigation/Routes'
import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import { Product } from '../../types'
import { getProduct } from '../../api'

type DetailScreenProps = StackScreenProps<RootStackParamList, 'Detail'>

export default function DetailScreen({ route }: DetailScreenProps) {
  const { productId } = route.params
  const [product, setProduct] = useState<Product>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const data = await getProduct(productId)
      setProduct(data)
      setLoading(false)
    }
    fetchData().catch(console.error)
  }, [])

  console.log(product)

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Image
            source={{ uri: product?.image }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View></View>
      </View>
      <Text>DetailScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
  },
  imageContainer: {
    borderRadius: 8,
    backgroundColor: 'white',
    padding: 6,
  },
  image: {
    height: 200,
    width: 150,
  },
})
