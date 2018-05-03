import * as React from 'react';
import TodoListView from '../components/TodoListView';
import TimelineView from '../components/TimelineView';
import SelectedItemView from '../components/TimelineView/SelectedItemView';

import './timeline.css';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home-intro">
          <TimelineView />
          <SelectedItemView />

          <TodoListView name="Mor" />
        </div>
      </div>
    );
  }
}
