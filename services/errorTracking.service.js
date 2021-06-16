import Honeybadger from '@honeybadger-io/react-native';
import {Platform} from 'react-native';

// simple export default containing the HONEY_BADGER_KEY property with the key value
import Config from '../secrets';

export default () => {
  Honeybadger.configure(Config.HONEY_BADGER_KEY);
};

export const setup = contextInfo => {
  Honeybadger.setContext({...contextInfo, platform: Platform.OS});
};

export const reset = () => {
  Honeybadger.resetContext();
};
