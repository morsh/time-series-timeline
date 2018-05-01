import * as React from 'react';
import { FontIcon } from 'react-md';

import { CONTROL, SHIFT } from './constants/unicode';
import { DIVIDER, ICON_TILE_CLASS_NAME } from './constants';
import CheckboxListItem from './CheckboxListItem';
import DocumentMenu from './DocumentMenu';

const MENU_ITEMS = [
  <CheckboxListItem
    id="google-docs-print-layout"
    key="print-layout"
    name="view-options"
    label="Group 1"
    defaultChecked={true}
    onChange={value => alert('Group 1 is ' + (value ? 'selected' : 'unselected'))}
  />, 
  <CheckboxListItem
    id="google-docs-print-layout-2"
    key="print-layout-2"
    name="view-options-2"
    label="Group 2"
    defaultChecked={true}
    onChange={value => alert('Group 2 is ' + (value ? 'selected' : 'unselected'))}
  />, 
  <CheckboxListItem
    id="google-docs-print-layout-3"
    key="print-layout-3"
    name="view-options-3"
    label="Group 3"
    defaultChecked={true}
    onChange={value => alert('Group 3 is ' + (value ? 'selected' : 'unselected'))}
  />, 
  <CheckboxListItem
    id="google-docs-print-layout-4"
    key="print-layout-4"
    name="view-options-4"
    label="Group 4"
    defaultChecked={true}
    onChange={value => alert('Group 4 is ' + (value ? 'selected' : 'unselected'))}
  />, {
    primaryText: 'Mode',
    nestedItems: [{
      primaryText: 'Editing',
      secondaryText: 'Edit document directly',
      tileClassName: ICON_TILE_CLASS_NAME,
      leftIcon: <FontIcon>mode_edit</FontIcon>,
    }, {
      primaryText: 'Suggesting',
      secondaryText: 'Edits become suggestions',
      tileClassName: ICON_TILE_CLASS_NAME,
      leftIcon: <FontIcon>insert_emoticon</FontIcon>,
    }, {
      primaryText: 'Viewing',
      secondaryText: 'Read or print final document',
      tileClassName: ICON_TILE_CLASS_NAME,
      leftIcon: <FontIcon>remove_red_eye</FontIcon>,
    }],
  }, DIVIDER,
  <CheckboxListItem
    id="google-docs-show-ruler"
    key="show-ruler"
    name="view-options"
    label="Show ruler"
    defaultChecked={true}
  />,
  <CheckboxListItem
    id="google-docs-show-equation-toolbar"
    key="show-equation-toolbar"
    name="view-options"
    label="Show equation toolbar"
  />,
  <CheckboxListItem
    id="google-docs-show-spelling-suggestions"
    key="show-spelling-suggestions"
    name="view-options"
    label="Show spelling suggestions"
    defaultChecked={true}
  />, {
    primaryText: 'Compact controls',
    rightIcon: `${CONTROL}+${SHIFT}+F`,
  }, 'Full screen',
];

interface IProps {
  id?: string;
}

export default class ViewMenu extends React.Component<IProps> {
  render () {
    return (
      <DocumentMenu {...this.props} id="view" text="View" menuItems={MENU_ITEMS} />
    );
  }
}