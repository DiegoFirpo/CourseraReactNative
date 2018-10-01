import React from 'react';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import Main from './components/MainComponent';
import { StyleSheet } from 'react-native';

const store = ConfigureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
