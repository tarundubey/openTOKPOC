import React, { Component } from 'react';
import { View , Button} from 'react-native';
import { OTSession, OTPublisher, OTSubscriber } from 'opentok-react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      publisherProperties: {
        videoSource: 'screen',
      },
    };
    this.apiKey = '';
    this.sessionId = '';
    this.token = '';
  }
  toggleSource() {
    if (this.state.publisherProperties.videoSource === 'camera') {
      this.setState({
        publisherProperties: {
          videoSource: 'screen',
        },
      });
    }
    else{
      this.setState({
        publisherProperties: {
          videoSource: 'camera',
        },
      });
    }
  }
  render() {
    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
  <OTSession apiKey={this.apiKey} sessionId={this.sessionId} token={this.token}>
        <OTPublisher style={{ width: 100, height: 100 }}
                     properties={this.state.publisherProperties}
        />
    <Button onPress={this.toggleSource.bind(this)}
            title={this.state.publisherProperties.videoSource }
    >
    </Button>
    <OTSubscriber style={{ width: 100, height: 100 }} />
    </OTSession>
    </View>
  );
  }
}
