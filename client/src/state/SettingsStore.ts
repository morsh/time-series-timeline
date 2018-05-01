import alt, { AbstractStoreModel } from './alt';

import ISettingsActions, { ISettings } from './SettingsActions';

export interface ISettingsContainer {
  settings: ISettings;
}

class SettingsStore extends AbstractStoreModel<ISettingsContainer> implements ISettingsContainer {

  settings: ISettings;

  constructor() {
    super();

    this.settings = { a: 0 };

    this.bindListeners({
      saveSettings: [ ISettingsActions.saveSettings, ISettingsActions.saveSettingsAsync ]
    });
  }
  
  saveSettings(settings: ISettings) {
    this.settings = settings;
  }
}

export default alt.createStore<ISettingsContainer>(
  (SettingsStore as AltJS.StoreModel<ISettingsContainer>), 'SettingsStore');