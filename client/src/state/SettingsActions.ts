import alt, { AbstractActions } from './alt';
import * as request from 'xhr-request';

export interface ISettings {
  a: any;
}

interface ISettingsActions {
  saveSettings(settings: ISettings): ISettings;
  saveSettingsAsync(settings: ISettings): (dispatcher: (settings: ISettings) => void) => void;
}

class SettingsActions extends AbstractActions implements ISettingsActions {

  saveSettings(settings: ISettings) {
    return settings;
  }

  saveSettingsAsync(settings: ISettings) {
    return (dispatcher: (settings: ISettings) => void) => {

      request(
        '/api', 
        { json: true }, 
        (err: Error, data: {}) => {
          if (err) { 
            throw err;
          }
          
          // the JSON result
          return dispatcher({ a: JSON.stringify(data) });
        }
      );

      // setTimeout(
      //   () => { dispatcher(settings); },
      //   2000
      // );
    };
  }
}

export default alt.createActions<ISettingsActions>(SettingsActions);