import config from '../config';
import { IServer, IUri } from './interfaces';

interface IUrl extends IServer, IUri {}

function getUrlWithParamsConfig(endpointConfig: string): IUrl {
  return {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
  };
}
export default getUrlWithParamsConfig;
