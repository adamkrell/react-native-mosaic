/**
 * Mosaic Component
 * By Adam Krell - April 28, 2015
 */
'use strict';

var React = require('react-native');
var {
  Image,
  PixelRatio,
  StyleSheet,
  View,
  Component,
} = React;


class Mosaic extends Component {
  constructor(props) {
    super(props);
    this.state = {uris: Array(4).fill(props.defaultUri)};
  }

  componentWillMount() {
    var uris = this.shuffle(this.props.uris);
    uris = uris.slice(0, 4);

    for (var i = 0; i < uris.length ; i++) {
      this.state.uris[i] = uris[i];
    }
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  render() {
    return (
      <View 
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          width: this.props.width,
          height: this.props.width,
          marginRight: 10,
        }}>
        <Image
          source={this.state.uris[0]}
          width={this.props.width / 2}
          height={this.props.width / 2}
        />
        <Image
          source={this.state.uris[1]}
          width={this.props.width / 2}
          height={this.props.width / 2}
        />
        <Image
          source={this.state.uris[2]}
          width={this.props.width / 2}
          height={this.props.width / 2}
        />
        <Image
          source={this.state.uris[3]}
          width={this.props.width / 2}
          height={this.props.width / 2}
        />
      </View>
    );
  }
};

var styles = StyleSheet.create({
  cellBorder: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    // Trick to get the thinest line the device can display
    height: 1 / PixelRatio.get(),
    marginLeft: 4,
  },
});

Mosaic.defaultProps = {
  width: 50,
  uris: [],
  defaultUri: {uri: 'https://facebook.github.io/react/img/logo_og.png'}
};

module.exports = Mosaic;
