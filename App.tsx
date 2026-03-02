/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Movies from './src/data/Movies';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        {/* == Movie Componenet == */}
        <Movies />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
