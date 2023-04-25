import Icon from 'react-native-vector-icons/AntDesign'

interface FavouriteIconProps {
  iconName: string
  size: number
}

export default function FavouriteIcon(props: FavouriteIconProps) {
  return <Icon name={props.iconName} size={props.size} color='#FF5F5F' />
}
