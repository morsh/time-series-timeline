import * as React from 'react';
import * as moment from 'moment';
import Timeline from 'react-calendar-timeline/lib';
import containerResizeDetector from 'react-calendar-timeline/lib/resize-detector/container';

import './timeline.css';

const types = [
  {id: 1, title: 'group 1'},
  {id: 2, title: 'group 2'}
]

const items = [
  {id: 1, group: 1, title: 'item 1', start_time: moment(), end_time: moment().add(1, 'hour')},
  {id: 2, group: 2, title: 'item 2', start_time: moment().add(-0.5, 'hour'), end_time: moment().add(0.5, 'hour')},
  {id: 3, group: 1, title: 'item 3', start_time: moment().add(2, 'hour'), end_time: moment().add(3, 'hour')}
]

export default class Home extends React.Component {
  render() {

    const clientWidth = document.documentElement.clientWidth || 1024;

    return (
      <div className="home">
        <p className="home-intro">
          <Timeline 
              groups={types}
              items={items}
              stackItems={true}
              defaultTimeStart={moment().add(-12, 'hour')}
              defaultTimeEnd={moment().add(12, 'hour')}

              resizeDetector={containerResizeDetector}
              sidebarWidth={clientWidth < 800 ? 160 : 300}
              headerLabelGroupHeight={clientWidth < 800 ? 80 : undefined}
          />
        </p>
      </div>
    );
  }
}
