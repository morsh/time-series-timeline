import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { DataItemStore } from '../../state/TimeData';

interface IProps {
  dataStore?: DataItemStore;
}

@inject('dataStore')
@observer
export default class SelectedItemView extends React.Component<IProps> {

  dataStore: DataItemStore;

  constructor(props: IProps) {
    super(props);
    
    this.dataStore = this.props.dataStore!;
  }

  render() {

    if (!this.dataStore.selectedItem) { return null; }

    return (
      <div>
        Selected Item: {this.dataStore.selectedItem.title}
      </div>
    );
  }
}
