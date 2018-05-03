import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Toolbar, Grid, Cell, Button } from 'react-md';
import { DataItemStore } from '../../state/TimeData';
import { FilterChip } from './FilterChip';
import { Autocomplete } from 'react-md';

interface IProps {
  dataStore?: DataItemStore;
}

@inject('dataStore')
@observer
export default class FilterView extends React.Component<IProps> {

  dataStore: DataItemStore;

  constructor(props: IProps) {
    super(props);
    
    this.dataStore = this.props.dataStore!;
  }

  addTypeFilter = (filter: string) => {
    this.dataStore.addTypeFilter(filter);
  }

  removeFilter = (filter: string) => {
    this.dataStore.removeTypeFilter(filter);
  }

  resetFilters = () => {
    this.dataStore.resetTypeFilters();
  }

  render() {

    const filters = this.dataStore.typeFilters;
    const chips = filters.map(filter => <FilterChip key={filter} filter={filter} onClick={this.removeFilter} />);

    return (
      <Toolbar colored={true}>
        <Grid style={{ width: '100%', padding: 0 }}>
          <Cell size={3} style={{ margin: '0 8px' }}>
            <Autocomplete
              id="filter-autocomplete"
              label="Select a filter to display"
              data={this.dataStore.types.map(type => type.title)}
              onAutocomplete={this.addTypeFilter}
              clearOnAutocomplete={true}
            />
          </Cell>
          <Cell size={9} style={{ margin: 'auto auto' }}>

            {chips.length > 0 &&
             <Button icon={true} title="Reset" onClick={this.resetFilters}>close</Button>}

            {chips}
          </Cell>
        </Grid>
      </Toolbar>
    );
  }
}
