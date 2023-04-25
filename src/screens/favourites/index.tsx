import { useSelector } from 'react-redux'
import { ProductCard } from '../../components/ProductCard'
import { selectFavourites } from '../../redux/selectors'
import { FlatList, ScrollView, Text, View, StyleSheet } from 'react-native'
import { checkFavourite } from '../../utils'

type Props = {}

export default function FavouritesScreen({}: Props) {
  const favourites = useSelector(selectFavourites)

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {favourites.length > 0 ? (
        <FlatList
          data={favourites}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View>
                <ProductCard
                  product={item}
                  isFavourite={checkFavourite(favourites, item)}
                />
              </View>
            )
          }}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text
            style={{
              color: 'white',
            }}
          >
            No items in Favourites :(
          </Text>
        </View>
      )}
    </ScrollView>
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
  emptyContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
