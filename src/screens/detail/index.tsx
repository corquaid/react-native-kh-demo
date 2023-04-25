import { StackScreenProps } from '@react-navigation/stack'
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { RootStackParamList } from '../../navigation/StackNavigator'
import FavouriteIcon from '../../components/FavouriteIcon'
import { useDispatch, useSelector } from 'react-redux'
import { selectFavourites } from '../../redux/selectors'
import Toast from 'react-native-toast-message'
import { addFavourite, removeFavourite } from '../../redux/favouritesSlice'

type DetailScreenProps = StackScreenProps<RootStackParamList, 'Detail'>

export default function DetailScreen({ route }: DetailScreenProps) {
  const { product } = route.params
  const favourites = useSelector(selectFavourites)
  const dispatch = useDispatch()

  const toggleFavourite = () => {
    if (!isFavourite) {
      dispatch(addFavourite(product))
      Toast.show({
        type: 'success',
        text1: 'Added to Favourites!',
        visibilityTime: 3000,
        topOffset: 0,
      })
    } else {
      dispatch(removeFavourite(product.id))
    }
  }

  const isFavourite = favourites.includes(product.id)

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product?.image }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>€{product.price.toFixed(2)}</Text>
            <Pressable onPress={toggleFavourite}>
              <FavouriteIcon
                iconName={isFavourite ? 'heart' : 'hearto'}
                size={20}
              />
            </Pressable>
          </View>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </View>
      <Toast />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: 8,
    backgroundColor: 'lightgray',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: 'white',
    padding: 6,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 150,
  },
  textContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    paddingBottom: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: '900',
    paddingBottom: 8,
  },
  description: {
    fontSize: 16,
  },
})
