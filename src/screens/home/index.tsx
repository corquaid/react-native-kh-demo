import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigation/Routes'
import { useEffect, useState } from 'react'
import { getAllCategories } from '../../api'
import Category from '../../components/Category'

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

  if (loading) {
    return <Text>Loading...</Text>
  }

  return (
    <ScrollView style={styles.container}>
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
    paddingVertical: 8,
    backgroundColor: '#2B2B48',
  },
  heading: {
    fontFamily: 'SourceSansRegular',
    fontSize: 20,
    fontWeight: 'bold',
  },
})
