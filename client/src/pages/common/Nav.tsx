import * as React from 'react';
import { Button } from 'react-md';

interface IProp {
  className?: string;
}

export default class Nav extends React.Component<IProp> {
  render() {
    return <Button icon={true} className={this.props.className}>menu</Button>;
  }
}