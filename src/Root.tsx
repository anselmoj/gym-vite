import persistStore from 'redux-persist/es/persistStore'

import { store } from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'

function Root() {
  const persistor = persistStore(store)

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  )
}

export default Root
