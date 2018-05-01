import * as React from 'react';
import { Card, CardTitle, CardText } from 'react-md';
import { ISettingsActions, ISettingsContainer, SettingsStore } from '../state';
import connectToStores from 'alt-utils/lib/connectToStores';

interface IState {
  str1: string;
  str2: string;
}

class Page1 extends React.Component<ISettingsContainer, IState> {

  static getStores(props: {}) {
    return [SettingsStore];
  }

  static getPropsFromStores(props: {}) {
      return SettingsStore.getState();
  }

  constructor(props: ISettingsContainer) {
    super(props);

    this.state = {
      str1: 'None',
      str2: 'None'
    };
  }

  getHelloWorld() {
    return this.state.str1 + ' ' + this.state.str2;
  }

  componentWillMount() {
    ISettingsActions.saveSettingsAsync({ a: 10 });

    setTimeout(
      () => {
        this.setState({
          str1: 'Hello',
          str2: 'World'
        });
      },
      5000
    );
  }

  render() {
    return (
      <div className="md-grid">
        <Card className="md-cell">
          <CardTitle title="Card 1" />
          <CardText>
            <p>{this.props.settings.a}</p>
            <p>{this.getHelloWorld()}</p>
          </CardText>
        </Card>
        <Card className="md-cell">
          <CardTitle title="Card 2" />
          <CardText>
            <p>Wowza</p>
          </CardText>
        </Card>
        <Card className="md-cell">
          <CardTitle title="Card 3" />
          <CardText>
            <p>Wowza</p>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default connectToStores(Page1);