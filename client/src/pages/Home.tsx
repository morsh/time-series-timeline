import * as React from 'react';
// import TodoListView from '../components/TodoListView';
import TimelineView from '../components/TimelineView';
import SelectedItemView from '../components/TimelineView/SelectedItemView';
import FilterView from '../components/TimelineView/FilterView';

import './timeline.css';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <FilterView />
        <TimelineView />
        <SelectedItemView />

        {/* <TodoListView name="Mor" /> */}
      </div>
    );
  }
}
