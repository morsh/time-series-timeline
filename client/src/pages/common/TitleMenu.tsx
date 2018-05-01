import * as React from 'react';
import { SelectField } from 'react-md';

interface IProps {
  id: string;

  // Injected by the Toolbar component
  className?: string;
  toolbar?: boolean;
  position?: string;
  defaultValue?: string;
  menuItems?: string[];
}

export default class TitleMenu extends React.Component<IProps> {

  public static defaultProps: Partial<IProps> = {
    defaultValue: 'All',
    menuItems: ['All', 'Family', 'Friends', 'Coworkers'],
  };

  render() {
    return <SelectField {...(this.props as any)} />;
  }
}