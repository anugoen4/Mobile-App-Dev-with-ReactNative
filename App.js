import React from 'react';
import 'react-native-gesture-handler';
import Main from './components/mainComponents';
import { NavigationContainer } from '@react-navigation/native';

class App extends React.Component {
  render(){
      return (
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      );
    }
  }

  export default App;
  

