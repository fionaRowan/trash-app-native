import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles';

class GuideScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Guide</Text>
        <Button
          title="Go to Map"
          onPress={() => this.props.navigation.navigate('Map')}
        />
      </View>
    );
  }
}


export default GuideScreen;