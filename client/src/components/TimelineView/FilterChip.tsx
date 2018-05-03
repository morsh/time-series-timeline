import * as React from 'react';
import { Avatar, Chip } from 'react-md';

interface IProps {
  filter: string;
  onClick: (filter: string) => void;
}

export class FilterChip extends React.Component<IProps> {

  handleRemove = () => {
    this.props.onClick(this.props.filter);
  }

  render() {
    const { filter, ...props } = this.props;
    return (
      <Chip
        {...props}
        style={{ margin: '5px' }}
        onClick={this.handleRemove}
        removable={true}
        label={filter}
        avatar={<Avatar random={true}>{filter.charAt(0)}</Avatar>}
      />
    );
  }
}
