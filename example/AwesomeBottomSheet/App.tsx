import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
} from 'react-native';

import BottomSheet from './Components/BottomSheet';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}>
        <SafeAreaView>
          <TouchableOpacity style={styles.button}>
            <Text>Open Bottom Sheet</Text>
          </TouchableOpacity>
          <BottomSheet />
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fff',
    padding: 20,
    width: Dimensions.get('window').width / 1 - 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    elevation: 2,
  },
});

export default App;
