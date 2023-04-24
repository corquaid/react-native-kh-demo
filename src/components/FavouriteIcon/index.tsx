import Icon from 'react-native-vector-icons/AntDesign'

interface FavouriteIconProps {
  iconName: string
}

export default function FavouriteIcon(props: FavouriteIconProps) {
  return <Icon name={props.iconName} size={16} color='#FF5F5F' />
}
