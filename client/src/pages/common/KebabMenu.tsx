import * as React from 'react';
import { MenuButton } from 'react-md';

interface IProps {
  id: string;
  className?: string;
  menuItems?: any[];
}

export default class KebabMenu extends React.Component<IProps> {

  public static defaultProps: Partial<IProps> = {
    menuItems: ['Settings', 'Help', 'Feedback']
  };

  render () {
    return (
      <MenuButton
        id={this.props.id}
        icon={true}
        className={this.props.className}
        menuItems={this.props.menuItems}
      >
        more_vert
      </MenuButton>
    );
  }
}