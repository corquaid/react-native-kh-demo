import { StackScreenProps } from '@react-navigation/stack'
import { useEffect, useState } from 'react'
import { FlatList, View, StyleSheet, Text } from 'react-native'
import { getAllCategories } from '../../api'
import Category from '../../components/Category'
import { RootStackParamList } from '../../navigation/StackNavigator'

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Store'>

export default function HomeScreen(props: HomeScreenProps) {
  const [categories, setCategories] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const data = await getAllCategories()
      setCategories(data)
      setLoading(false)
    }
    fetchData().catch(console.error)
  }, [])

  return (
    <View style={styles.container}>
      {loading && <Text style={{ color: 'white' }}>Loading...</Text>}
      {!loading && categories.length > 0 ? (
        <FlatList
          data={categories}
          renderItem={({ item }) => {
            return <Category category={item} />
          }}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text>No products found.</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#212134',
  },
  heading: {
    fontFamily: 'SourceSansRegular',
    fontSize: 20,
    fontWeight: 'bold',
  },
})
