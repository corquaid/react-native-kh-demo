import { StackScreenProps } from '@react-navigation/stack'
import { Image, StyleSheet, Text, View } from 'react-native'
import { RootStackParamList } from '../../navigation/StackNavigator'

type DetailScreenProps = StackScreenProps<RootStackParamList, 'Detail'>

export default function DetailScreen({ route }: DetailScreenProps) {
  const { product } = route.params

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
    // flexDirection: 'row',
    alignItems: 'center',
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
