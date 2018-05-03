import * as React from 'react';
import * as moment from 'moment';
import { observer, inject } from 'mobx-react';
import { DataItemStore } from '../../state/TimeData';
import Timeline from 'react-calendar-timeline/lib';
import containerResizeDetector from 'react-calendar-timeline/lib/resize-detector/container';

interface IProps {
  dataStore?: DataItemStore;
}

@inject('dataStore')
@observer
export default class TimelineView extends React.Component<IProps> {

  dataStore: DataItemStore;

  constructor(props: IProps) {
    super(props);
    
    this.dataStore = this.props.dataStore!;
  }

  render() {

    const clientWidth = document.documentElement.clientWidth || 1024;

    return (
      <Timeline 
          groups={this.dataStore.types}
          items={this.dataStore.items}
          keys={{ 
            groupIdKey: 'id',
            groupTitleKey: 'title',
            groupRightTitleKey: 'rightTitle',
            itemIdKey: 'id',
            itemTitleKey: 'title',
            itemDivTitleKey: 'title',
            itemGroupKey: 'group',
            itemTimeStartKey: 'startTime', 
            itemTimeEndKey: 'endTime'
          }}

          stackItems={true}
          defaultTimeStart={moment().add(-12, 'hour')}
          defaultTimeEnd={moment().add(12, 'hour')}

          onItemSelect={(itemId: number) => this.dataStore.selectItem(itemId)}

          resizeDetector={containerResizeDetector}
          sidebarWidth={clientWidth < 800 ? 160 : 300}
          headerLabelGroupHeight={clientWidth < 800 ? 80 : undefined}
      />
    );
  }
}
