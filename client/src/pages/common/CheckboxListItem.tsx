import * as React from 'react';
import { FontIcon, ListItemControl, Checkbox } from 'react-md';

interface IProps {
  id: string;
  label: string;
  name: string;
  rightIcon?: JSX.Element;
  defaultChecked?: boolean;
  onChange?: (value: boolean, changeEvent: UIEvent) => void;
}

interface IState {
  hover: boolean;
}

export default class CheckboxListItem extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);

    this.state = { hover: false };
  }

  handleMouseOver = () => {
    this.setState({ hover: true });
  }

  handleMouseLeave = () => {
    this.setState({ hover: false });
  }

  render() {
    const { hover } = this.state;
    const { label, rightIcon, ...props } = this.props;
    return (
      <ListItemControl
        {...{primaryText: label}}
        primaryAction={
          <Checkbox
            {...props}
            checkedIcon={<FontIcon>check</FontIcon>}
            uncheckedIcon={null}
            {...{inkDisabled: true}}
          />
        }
        rightIcon={rightIcon}
        className={hover ? 'md-list-tile--active' : ''}
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
      />
    );
  }
}
