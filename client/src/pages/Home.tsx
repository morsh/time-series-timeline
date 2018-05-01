import * as React from 'react';
import * as moment from 'moment';
import Timeline from 'react-calendar-timeline/lib';
import containerResizeDetector from 'react-calendar-timeline/lib/resize-detector/container';
import { Toolbar } from 'react-md';
import Nav from './common/Nav';
import KebabMenu from './common/KebabMenu';
// import TitleMenu from './common/TitleMenu';
import DocumentMenus from './common/DocumentMenus';

import './timeline.css';

const types = [
  {id: 1, title: 'group 1'},
  {id: 2, title: 'group 2'},
  {id: 3, title: 'group 3'},
  {id: 4, title: 'group 4'},
];

const items = [
  {id: 1, group: 1, title: 'item 1', start_time: moment(), end_time: moment().add(1, 'hour')},
  {id: 2, group: 2, title: 'item 2', start_time: moment().add(-0.5, 'hour'), end_time: moment().add(0.5, 'hour')},
  {id: 3, group: 1, title: 'item 3', start_time: moment().add(2, 'hour'), end_time: moment().add(3, 'hour')},
  {id: 4, group: 3, title: 'item 4', start_time: moment().add(-0.5, 'hour'), end_time: moment().add(0.5, 'hour')},
  {id: 5, group: 4, title: 'item 5', start_time: moment().add(1.5, 'hour'), end_time: moment().add(4.5, 'hour')},
  {id: 6, group: 4, title: 'item 6', start_time: moment().add(-1.5, 'hour'), end_time: moment().add(0.5, 'hour')},
];

export default class Home extends React.Component {
  render() {

    const clientWidth = document.documentElement.clientWidth || 1024;

    return (
      <div className="home">
        <p className="home-intro">
          <Toolbar
            colored={true}
            nav={<Nav />}
            actions={<KebabMenu id="toolbar-title-menu-kebab" />}
          >
            <DocumentMenus />
          </Toolbar>
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
