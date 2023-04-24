import { StackScreenProps } from '@react-navigation/stack'
import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
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
    <ScrollView style={styles.container}>
      {loading && <Text>Loading...</Text>}
      {categories.length > 0 ? (
        categories.map((category) => (
          <Category key={category} category={category} />
        ))
      ) : (
        <Text>No products found.</Text>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#2B2B48',
  },
  heading: {
    fontFamily: 'SourceSansRegular',
    fontSize: 20,
    fontWeight: 'bold',
  },
})
