import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles';

class MapScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Map</Text>
        <Button
          title="Go to Guide"
          onPress={() => this.props.navigation.navigate('Guide')}
        />
      </View>
    );
  }
}

export default MapScreen;