import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles';

class GuideScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Guide',
      headerRight: (
        <Button
          onPress={() => navigation.navigate('Map')}
          title="Go to Map"
          color="#bbb"
        />
      ),
    };
  };

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