import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import ErrorBoundary from './src/components/ErrorBoundary';
import Navigator from './src/navigator/Navigator';

const App = () => {
  return (
    <ErrorBoundary>
      <SafeAreaView style={styles.wrapper}>
        <StatusBar
          translucent={false}
          backgroundColor="#fff"
          barStyle="dark-content"
        />
        <Navigator />
      </SafeAreaView>
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default App;
