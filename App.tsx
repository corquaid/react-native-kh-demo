import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import StackNavigator from './src/navigation/StackNavigator'
import { persistor, store } from './src/redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StackNavigator />
      </PersistGate>
    </Provider>
  )
}
