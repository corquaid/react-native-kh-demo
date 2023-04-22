import { ReactNode } from 'react'
import { View } from 'react-native'

interface Props {
  children: ReactNode
}

export default function Center({ children }: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {children}
    </View>
  )
}
