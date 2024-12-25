
import React from "react";
import { Provider } from 'react-redux'
import Landing from './Landing'
import './../styles/App.css';
import store from '../app/store'
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Provider store={store}>
          <Landing />
        </Provider>
        <ErrorBoundary>
        <MemoryGame totalCards={12} />
      </ErrorBoundary>
    </div>
  )
}

export default App
